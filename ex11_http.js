const http = require ('http')

const server = http.createServer (function(req , res){
  res.writeHead(200, {"Content-Type": "text/html"})
  res.end('<h1> É MELHOR VOCE UTILIZAR O EXPRESS, NÃO ACHAS? </h1>')
})

const porta = 3456

server.listen (porta, function(){
  console.log(`Escutando a porta ${porta}`);
})
