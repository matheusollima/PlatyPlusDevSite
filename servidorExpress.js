const express = require('express');
const path = require('path');
const app = express()

const caminhoHtml = path.join(__dirname, 'index.html');
const caminhoCss = path.join(__dirname, 'estilo.css');
const caminhoJs01 = path.join(__dirname, 'envioEmail.js');
const port = 8282;

app.get('/', (req,res)=>{
    res.status(200).sendFile(caminhoHtml);
})

app.get('/estilo.css', (req,res)=>{
    res.status(200).sendFile(caminhoCss);
})

app.get('/envioEmail.js', (req,res)=>{
    res.status(200).sendFile(caminhoJs01);
})

app.listen(8282, ()=> console.log(`Executando arquivos na porta ${port}`))