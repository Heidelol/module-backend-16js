console.log('Hola desde node.js')

let myName = 'heidel';
const host = 'http://localhost:8080'

console.log(myName)
console.log(host)

//funciones

function suma(a, b){
    console.log('suma: ',a+b)
    return a+b
}

const resta = (a, b) =>{
    console.log('resta: ',a-b)
    return a - b
}

suma(10,20)
resta(10,20)

if(false){
    console.log('verdadero')
} else {
    console.log('falso')
}