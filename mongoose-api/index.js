// generar un endpoint  que me permita enlistar a los koders que tengo en la BD
const express = require('express')

const server = express()

server.use(express.json()) // recibir JSON 



server.get('/koders', (request, response) => {
    //
    response.json({
        success: true,
        data: {
            koders: []
        }
    })
})

server.listen(8080,() => {
    console.log('Server running on port 8080')
})