const fs = require('fs');
fs.readdir('../02-file-system','utf-8',(err) =>{
    if(err){
        console.log('no se puede leer')
        return
    } else {
        console.log('se pudo leer')
    }
})