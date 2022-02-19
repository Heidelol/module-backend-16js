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

// server.get('/koders', async (request, response) => {
// //    fs.readFile() //callbacks
// //    fs.promises.readFile() // promesa
//     // const content = await fs.promises.readFile('./koders.json')

//     const content = fs.readFileSync('./koders.json', 'utf8') //sincrona
//     console.log(content) // string
//     const json = JSON.parse(content) // convertir de string a un objeto valido
//     console.log('---JSON---')
//     console.log(json)
//     response.json(json.koders)
// })

server.post('/koders', async (request, response) => {
    const newKoder = request.body
    console.log(newKoder)
    const  content = await fs.promises.readFile('./koders.json')
    const json = JSON.parse(content)
    json.koders.push(newKoder)

    console.log(json)

    await fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 1), 'utf8')

    response.json({
        success: true,
        message: 'Se creo el Koder'
    })
})

//update
// sintaxys universal
// path parameters
//Patch /koders/1
//Patch /koders/4
//patch /recursos/identificador
server.patch('/koders/:id', async (request, response) => {
   console.log('params: ', request.params.id)
   const idKoder = request.params.id
   const name = request.body.name
   const content = await fs.promises.readFile('./koders.json')
   const json = JSON.parse(content)
   console.log('json: ', json)

   //map
   const newKoders = json.koders.map((koder, index) => {
        if(koder.id === parseInt(idKoder)) {
            koder.name = name
        }
        return koder
   })
   console.log(newKoders)

   json.koders = newKoders

   await fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 2),'utf8')
   response.json({
       success: true,
   })
})

server.delete('/koders/:id', async (request, response) => {
    console.log('params: ', request.params.id)
    const idKoder = request.params.id
    const name = request.body.name
    const content = await fs.promises.readFile('./koders.json')
    const json = JSON.parse(content)
    console.log('json: ', json)
 
    //map
    const newKoders = json.koders.map((koder, index) => {
         if(koder.id === parseInt(idKoder)) {
             koder.name = name
         }
         return koder
    })
    console.log(newKoders)
 
    json.koders = newKoders
 
    
    await fs.promises.unlink('./koders/:id', JSON.stringify(json, null, 2),'utf8')
    response.json({
        success: true,
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