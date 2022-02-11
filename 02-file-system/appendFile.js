const fs = require('fs');


fs.appendFile('new-file.txt','Data to append','utf-8',(err) =>{
    if(err){
        console.log('error en append')
        return
    }
    console.log('The data was appened to the file')
})