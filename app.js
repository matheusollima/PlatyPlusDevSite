const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname);
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));
app.post("/request", (req, res) => {
  const dataForm = {
    Nome: req.body.nome,
    Email: req.body.email,
    Mensagem: req.body.mensagem,
  };

  res.json(dataForm);

  const enviarFormularioEmail = async () => {
    const nodemailer = require("nodemailer");
    let transportador = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "platyplusdev@gmail.com",
        pass: "jdqo psfw yarr tivj",
      },
    });

    let mensagemEmail = {
      from: "Platyplus dev <platyplusdev@gmail.com>",
      to: "platyplusdev@gmail.com",
      subject: "Mensagem de cliente",
      text: `Nome: ${dataForm.Nome}, Email: ${dataForm.Email}, ${dataForm.Mensagem}`,
    };

    const enviarEmail = async () => {
      try {
        console.log("Enviando E-mail");
        await transportador.sendMail(mensagemEmail);
        process.exit();
      } catch (error) {
        console.log(`Deu erro =( ${error})`);
      }
    };
    await enviarEmail();
  };
  enviarFormularioEmail();
});

app.listen(port, () => {
  console.log(`Servidor esta rodando na port: ${port}`);
});
