const express = require('express');
const server = express(); // regresa un servidor
const fs = require('fs');

const kodersRouter = require('./routers/koders')

//middleware
server.use(express.json()) // recibir json en nuestro request


// montar el router de koders
server.use('/koders', kodersRouter)





server.listen(8080, () => {
    console.log('server running on port: 8080')
})

// Endpoint
/*
    Conjunto de un METODO y una RUTA
    GET /koders -> es un endpoint
    get /koders/:id
    post /koders
    patch /koders
*/

























// server.get('/koders', (request, response) => {
//     response.write('Aqui estan todos los koders')
//     response.end()
// })

// server.post('/koders', (request, response) => {
//     response.write('aqui puedes crear koders')
//     response.end()
// })

// server.put('/koders', (request, response) => {
//     response.write('aqui puedes sustituit a koders')
//     response.end()
// })

// server.get('/koders', (request, response) => {

//     // response.writeHead(400,{'Content-Type': "application/json"})

//     // const json = {
//     //     message: 'ok'
//     // }
//     // const jsonString = JSON.stringify(json)
//     // response.write(jsonString)
//     // response.end()

//     // express
//     response.status(201)
//     response.json({
//         message: 'koders'
//     })
// })