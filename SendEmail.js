const form = document.getElementById("formulario-contato");
const spinner = document.getElementById("spinner");
const msgStatus = document.getElementById("msgEnvio");
const urlPHP = 'apiPHPMail/sendResend.php';

form.addEventListener("submit", function (e) {
   e.preventDefault();
   spinner.style.visibility = "visible";
   msgStatus.style.display = "none";


   const formData = new FormData(form);

   fetch(urlPHP, {
      method: "POST",
      body: formData
   })


      .then(response => response.text())
      .then(text => {
         spinner.style.visibility = "visible";
         if (text.includes("sucesso")) {
             spinner.style.visibility = "hidden";
            msgStatus.classList.toggle('sucesso');
            msgStatus.innerText = "Mensagem enviada !";
            msgStatus.style.display = 'block';
            setTimeout(() => {
              
               msgStatus.style.display = "none";
               msgStatus.classList.toggle('sucesso');
            }, 4000);

            form.reset();
         } else {
            spinner.style.visibility = "hidden";
            msgStatus.classList.toggle('erro');
            msgStatus.innerText = "Erro ao enviar a mensagem !";
            msgStatus.style.display = 'block';
            setTimeout(() => {
               
               msgStatus.style.display = "none";
               msgStatus.classList.toggle('erro')
            }, 4000);
             

         }

      })
      .catch(() => {
         spinner.style.visibility = "hidden";
         msgStatus.classList.toggle('erro');
            msgStatus.innerText = "Erro ao enviar a mensagem !";
         msgStatus.style.display = "block";
         alert("o erro não é no php");
          setTimeout(() => {
               msgStatus.style.display = "none";
               msgStatus.classList.toggle('erro')
            }, 4000);
           
      });
});