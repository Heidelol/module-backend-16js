const fs = require('fs');

fs.unlink('new-file.txt',(err) => {
    if(err){
        console.log('se quedo el archivo')
        return
    }
    console.log('se logro borrar el')
})