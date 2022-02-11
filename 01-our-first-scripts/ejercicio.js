// crear una funcion que nos saludo por nuestro nombre
// debe retornar el saludo en un string
// usar el valor de retorno de la funcion para hacer un console.log


// let myName ='Heidel'
// // declaracion de la funcion.
// function saludar(myName){

//     return `Hola ${myName}`;
// }

// console.log(saludar(myName))

// declarando la funcion
function greeting(nameToGreeting) {
    return `Hola ${nameToGreeting} buenas noches!!!`
}
// ejecutando la funcion
const greetingToFer = greeting('Fernanda')
console.log('greetingToFer: ', greetingToFer)

const greetingToRobert = greeting('Robert')
console.log('greetinToRobert: ', greetingToRobert)

let namePaco= 'Paco'
console.log('saludo a paco: ', greeting(namePaco))

//function que regrese nombre aleatorios.
function getNameRandom() {
    const arrayNames = ['PACO','ERICK','BRAYAN','JESS'];
    // generar un index random.
    const indexRandom = Math.floor(Math.random() * (arrayNames.length - 0) + 0)

    return arrayNames[indexRandom]
}

console.log('name random:',getNameRandom())

const greetingRandom = greeting(getNameRandom())
console.log('greetingRandom: ', greetingRandom)

const nameRandom = getNameRandom()
console.log('otherGreeting: ',greeting(nameRandom))
