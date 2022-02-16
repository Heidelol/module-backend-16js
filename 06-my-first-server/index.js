const http = require('http');

const server = http.createServer((request, response) => {
    console.log('url: ', request.url)
    response.write('Hola desde el mas alla con Node.JS.')
    response.end()
});

server.listen(8080,() => {
    console.log('Servidor escuchando en el puerto 8080')
})