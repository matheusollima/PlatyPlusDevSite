const express = require('express');
const path = require('path');
const app = express();

const port = 8181;
const caminho = path.join(__dirname)
console.log(caminho);

app.use(express.static(caminho));
app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`));


