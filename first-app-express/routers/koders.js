const express = require('express')
const fs = require('fs')
const router = express.Router() // creando el router

router.get()

async function getKoders () {
    const  content = await fs.promises.readFile('./koders.json')
    const json = JSON.parse(content)
    return json
}

router.get('/koders', async (request, response) => {
    console.log('query params: ', request.query)
    const count = request.query.count
    const json = await getKoders()

    let kodersData = json.koders
    
    if(count){
        kodersData = kodersData.slice(0, parseInt(count))
    }
   

   

    response.json({
        koders: kodersData
    })
})

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

router.post('/koders', async (request, response) => {
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
router.patch('/koders/:id', async (request, response) => {
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
 //GET /koders/2
router.get('/koders/:id',async (request, response) => {
    const idKoder = request.params.id

    const content = await fs.promises.readFile('./koders.json')
    const json = JSON.parse(content)

    // const koderFound = json.koders.filter((koder, index) => koder.id === parseInt(idKoder))
    const koderFound = json.koders.find((koder) => koder.id === parseInt(idKoder))
    console.log(koderFound)

    if(!koderFound){
        response.status(404)
        response.json({
            success: false,
            message: 'Koder not found'
        })
        return
    } 
    response.json({
        koder: koderFound
    })
})

router.delete('/koders/:id',async (request, response) =>{
    const idKoder = request.params.id

    const content = await fs.promises.readFile('./koders.json')
    const json = JSON.parse(content)

    const kodersFilteres = json.koders.filter((koder) => koder.id !== parseInt(idKoder))

    json.koders = kodersFiltered

    await fs.promises.writeFile('./koders.json', JSON.stringify(json,null,2), 'utf8')

    response.json({
        success: true,
        message: 'Koder deleted successfully'
    })

})

// exportar
module.exports = router