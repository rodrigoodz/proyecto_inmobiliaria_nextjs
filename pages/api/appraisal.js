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
  form.parse(req, (err, fields, files) => {
    // console.log(err, fields, files);

    const { email, name, address } = fields;
    let filesToSend = [];
    filesToSend.push(files.file0 || null);
    filesToSend.push(files.file1 || null);
    filesToSend.push(files.file2 || null);
    filesToSend.push(files.file3 || null);
    filesToSend.push(files.file4 || null);

    if (err) {
      res.status(500).json({
        message: "Hubo un error al enviar el mensaje. Intente más tarde",
        ok: false,
      });
    } else {
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
          <h2>Correo: ${email}</h2>
          <h2>Nombre: ${name}</h2>
          <h2>Direccion: ${address}</h2>
          <h2>Mensaje</h2>
          </div>`,
        attachments:
          filesToSend.length > 0
            ? filesToSend.filter((file) => {
                if (file !== null) {
                  return {
                    filename: file.name,
                    path: file.path,
                  };
                }
              })
            : null,
      };

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
    }
  });
}
