const mongoose = require('mongoose')

const DB_USER = 'heidel'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'kodemia16.nf1x6.mongodb.net'
const DB_NAME = 'kodemia'

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

// Modelo (Plantilla | template)


// Schema (Definir mi plantilla)

/*
1.- generamos el schema
2.- a partir del shcema generamos el modelo
*/

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 100,
        trim: true
    },
    lastName: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 100,
        trim: true
    },
    age: {
        type: Number,
        require: true,
        min: 1,
        max: 150
    },
    gender: {
        type: String,
        require: true,
        trim: true,
        maxlength: 1,
        enum: ['f','m'] // estos valores son validos
    }
})

// modelo

const Koder = mongoose.model('koders', koderSchema)

mongoose.connect(URL)
.then( async(connection) => {
    console.log('DB connection established: ', connection)

    // Koder.find({}) // peticiones son asyncronas
    //     .then((koders) => {
    //         console.log('Mis koders: ', koders)
    //     })
    //     .catch((error) => console.error('Error: ', error))

    const newKoder = {
        name: 'Bryan',
        lastName: 'Rodriguez',
        age: 31
    }
    Koder.create(newKoder)
    .then((koderCreated) => {
        console.log('KoderCreated: ',koderCreated)
    })
    .catch((error) => console.error('Error: ', error))

    const koderCreated = await Koder.create(newKoder)
})
.catch((error)=> {
    console.error('Error: ', error)
})