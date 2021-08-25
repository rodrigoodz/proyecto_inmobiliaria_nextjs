import filterUndefinedPics from "../../helpers/filterUndefinedPics";
import uploadPics from "../../helpers/uploadPics";

const formidable = require("formidable");
const nodemailer = require("nodemailer");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function (req, res) {
  const form = new formidable.IncomingForm();
  // form.uploadDir = "./public";
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    // console.log(err, fields, files);

    const { name, address, email, location, type, surface, rooms, bathrooms } =
      fields;

    const filesToSend = filterUndefinedPics(files);

    if (err) {
      res.status(500).json({
        message: "Hubo un error al enviar el mensaje. Intente más tarde",
        ok: false,
      });
    } else {
      try {
        const urls = await uploadPics(filesToSend);

        const transporter = nodemailer.createTransport({
          port: 587,
          host: "smtp-mail.outlook.com",
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
          secureConnection: false,
          tls: {
            ciphers: "SSLv3",
          },
        });

        var mailData = {
          from: process.env.EMAIL,
          to: process.env.TO_EMAIL,
          subject: "Correo desde Melina Roncaglia | Negocios Inmobiliarios",
          text: "Necesito una tasacion",
          html: `<div>
            <b>Correo:</b> ${email}<br/>
            <b>Nombre:</b> ${name}<br/>
            <b>Direccion:</b> ${address}<br/>
            <b>Provincia:</b> ${location}<br/>
            <b>Tipo de Propiedad:</b> ${type}<br/>
            <b>Superficie:</b> ${surface}m<sup>2</sup><br/>
            <b>Habitaciones:</b> ${rooms}<br/>
            <b>Baños:</b> ${bathrooms}<br/>
            </div>`,
          attachments:
            urls.length > 0
              ? urls.map((url) => {
                  return {
                    path: url,
                  };
                })
              : null,
        };

        console.log(mailData);

        transporter.sendMail(mailData, function (err) {
          if (err) {
            return res.status(500).json({
              message: "Hubo un error al enviar el mensaje. Intente más tarde",
              ok: false,
            });
          } else {
            return res
              .status(200)
              .json({ message: "Mensaje enviado con exito", ok: true });
          }
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Hubo un error al enviar el mensaje. Intente más tarde",
          ok: false,
        });
      }
    }
  });
}
