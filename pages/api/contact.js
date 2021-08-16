export default function (req, res) {
  let nodemailer = require("nodemailer");

  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      secure: true,
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
      <h2>Correo: ${req.body.email}</h2> 
      <h2>Nombre: ${req.body.name}</h2> 
      <h2>Mensaje</h2>
      <h3>${req.body.message}</h3>
      </div>`,
    };

    transporter.sendMail(mailData, function (err) {
      if (err) {
        // console.log(err);
        res.status(500);
      } else {
        // console.log(info);
        res.status(200);
      }
    });
  } catch (error) {
    res.status(500);
  }

  res.end();
}
