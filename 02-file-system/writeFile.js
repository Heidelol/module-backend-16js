const fs = require('fs');

const content = `esto es el contenido agregado desde nodejs`
fs.writeFile('new-file.txt',content,'utf-8',(error) => {
    if(error){
        console.log('no se pudo crear el archivo')
        
    } else {
        console.log('se creo el archivo correctamente')
    }
    
})