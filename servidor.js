const http = require('http');
const path = require('path');
const fs = require('fs');

const caminho = path.join(__dirname, "index.html");

fs.readFile(caminho, (err,html)=>{
    if(err) throw err;
    http.createServer((request, response) => {
        response.writeHead(200, {'Content-Type' : 'text/html'});
    
     response.write(html);
     response.end();
    }).listen('1337');
})


