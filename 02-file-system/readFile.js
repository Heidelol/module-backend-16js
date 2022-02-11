const fs = require('fs');

fs.readFile('new-file.txt','utf-8', (err,data) => {
    if(err){
        console.log('archivo no encontrado')
        return
    }
    console.log(data)
})