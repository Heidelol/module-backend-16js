const fs = require('fs');

// fs.rmdir('../03-prueba',(err) => {
//     if(err){
//         console.log('no se borro')
//         return
//     } else {
//         console.log('se borro')
//     }
// })

const directoryToDelete = 'newDirectory'

function rmdir(pathToDelete){
    fs.readdir(pathToDelete, (err, filesAndDirectories) =>{
        if(err){
            console.error('Error: ', error)
            return
        }

        console.log(filesAndDirectories)

        filesAndDirectories.forEach((file, index) => {
            console.log(file)
            const newPathFIle = `${pathToDelete}/${file}`
            fs.unlink(newPathFIle, (err) => {
                console.error('Error: ', err)
                return
            })
            console.log('se borro el archivo: ', file)
            //validar que sea el ultimo elemento que se borro
            if(index === filesAndDirectories.length - 1){
                fs.rmdir(pathToDelete, (err) => {
                    if(err){
                        console.error('Error: ', err)
                        return
                    }
                    console.log('Se borro el directorio')
                })
            }
        })
    })
}

rmdir(directoryToDelete)