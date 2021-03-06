export default function (req, res) {
  let nodemailer = require("nodemailer");
  try {
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
      subject:
        req.body.subject.length == 0
          ? "Correo desde Melina Roncaglia | Negocios Inmobiliarios"
          : req.body.subject,
      text: req.body.message,
      html: `<div>
        <b>Correo:</b>  ${req.body.email}<br />
        <b>Nombre:</b>  ${req.body.name}<br />
        <p>${req.body.message}</p>
        </div>`,
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
  } catch (error) {
    res.status(500).json({
      message: "Hubo un error al enviar el mensaje. Intente más tarde",
      ok: false,
    });
  }
}
