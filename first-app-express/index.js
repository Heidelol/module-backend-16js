const express = require('express');
const server = express(); // regresa un servidor
const fs = require('fs');

//middleware
server.use(express.json()) // recibir json en nuestro request


// server.post('/koders',(request, response) => {
//     const body = request.body
//     console.log('body: ', body)
//     console.log('body-name: ',body.name)

   
//     response.json({
//         message: 'oki'
//     })
// })

server.get('/koders',(request, response) => {
    var fs = require('fs')  
    var obj = {};
  
    fs.readFile('koders.json', function (err, data) {
          var json = JSON.parse(data)
          json.push();
  
          fs.writeFile("koders.json", JSON.stringify(json))
   });

    
    response.json({
        message: 'oki'
    })
})



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