
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {

  if(req.url==='/'){
    res.writeHead(200);
    res.end(fs.readFileSync('templates/index.html'));
    
  }

}).listen(3000);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…');