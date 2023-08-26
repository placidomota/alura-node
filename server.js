//importando o modulo nativo http
const http = require('http')

//definindo uma porta para sevidor nosso servidor
const port = 3000;


//constante para o servidor e definindo a resposta do servidor
const server = http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Curso de Node');
})

//Definindo a porta que o servidor vai escutar a requisicao
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})