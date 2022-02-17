const http = require('http')


const server = http.createServer((request, response) =>{
    response.setHeader('Content-type', 'application/json')
    const json = {message: 'Hola'}
    const jsonString = JSON.stringify(json)
    response.write(jsonString)
    response.end()
})

server.listen(8080,() => {
    console.log('server running on port 8080')
})