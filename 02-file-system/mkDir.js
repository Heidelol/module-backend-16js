const fs = require('fs');

fs.mkdir('../03-prueba',{recursive: true},(err) =>{
    if(err){
        console.log('no se creo')
        return
    } else {
        console.log('Si se creo')
    }
})