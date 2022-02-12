const fs = require('fs');

fs.rmdir('../03-prueba',(err) => {
    if(err){
        console.log('no se borro')
        return
    } else {
        console.log('se borro')
    }
})