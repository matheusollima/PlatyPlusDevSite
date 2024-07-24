const enviarDadosForm = () => {
    const dadosEmail = {
        nome: document.getElementById('inputNome').value,
        email: document.getElementById('inputEmail').value,
        msg: document.getElementById('msgContato').value,
    }
    
    module.exports = {
        dadosEmail,
    }
}

