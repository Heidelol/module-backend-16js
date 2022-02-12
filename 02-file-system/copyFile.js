const fs = require('fs');

fs.copyFile('new-file.txt','otherfile.txt',(err) =>{
    if(err){
        console.log('No se copio')
        return
    } else {
        console.log('si se copio.')
    }
})