const http = require('http');

const server = http.createServer((request, response) => {
    console.log('url: ', request.url)
    console.log('method: ', request.method)
    if(request.url === '/koders'){
        if(request.method === 'GET'){
            response.write('Aqui estan todos los koders')
            response.end()
        } else if(request.method === 'POST') {
            response.write('Aqui puedes crear koders')
            response.end()
        } else {
            response.write('no estaba preparado para esto.')
            response.end()
        }
    } else {
        response.write('no estaba preparado para esto.')
        response.end()
    }
    response.end()
});

server.listen(8080,() => {
    console.log('Servidor escuchando en el puerto 8080')
})

// Ejercicio 1
// /koders
// GET /koders -> Aqui estan todos los koders
// POST /koders -> aqui puedes crear un koder
//X /x -> no estaba preparado para esto
