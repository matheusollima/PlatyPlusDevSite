
const enviarFormularioEmail = async() =>{
    // const dadosEmail = {
    //     nome: document.getElementById('inputNome').value,
    //     email: document.getElementById('inputEmail').value,
    //     msg: document.getElementById('msgContato').value,
    // }
    
    
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
        text: "Olá, mundo!",
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
// enviarFormularioEmail();


