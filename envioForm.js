const express = require('express');
const path = require('path');
const app = express()
var Nome01;
const indexPath = path.join(__dirname, "index.html");

app.use(express.urlencoded());

app.get('/', function(request, response, next){
    response.status(200).sendFile(indexPath);
});

app.post('/',function(request,response, next){     
     const enviarFormularioEmail = async() =>{
        const nodemailer = require('nodemailer');
        let transportador = nodemailer.createTransport(
            {
                service: "gmail",
                auth: {
                    user: "platyplusdev@gmail.com",
                    pass: "jdqo psfw yarr tivj",
                },
        });
        
        let mensagemEmail = {
            from: 'Platyplus dev <platyplusdev@gmail.com>',
            to: 'platyplusdev@gmail.com',
            subject: 'Mensagem de cliente',
            text: `Nome: ${Nome}, Email: ${Email}`,
        }
        
        const enviarEmail = async() => {
            try{
                console.log('Enviando E-mail')
                await transportador.sendMail(mensagemEmail);
                process.exit()
            } catch (error) {
               console.log(`Deu erro =( ${error})`)
            
            }
        }
       await enviarEmail();
        
        
    }
    enviarFormularioEmail();
    // e.preventDefault();
    // app.get('/', function(request, response, next){
    //     response.status(200).sendFile(indexPath);
    // });
    
});

app.listen(2000);











