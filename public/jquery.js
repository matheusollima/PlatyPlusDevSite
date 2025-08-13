$(document).ready(function () {
  $("#btEnviar").click(function () {
    $.post(
      "/request",
      {
        nome: document.getElementById("inputNome").value,
        email: document.getElementById("inputEmail").value,
        mensagem: document.getElementById("msgContato").value,
      },
      function (data, status) {
        const { Nome, Email, Mensagem } = data;
        document.getElementById("msgEnviado").innerText = "Msg Enviada";
      }
    );
  });
});
