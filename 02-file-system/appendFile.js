const content = ' poner esto'


fs.appendFile('new-file.txt',content,'utf-8',(err) =>{
    if(err){
        console.log('error en append')
        return
    }
    console.log('The data was appened to the file')
})