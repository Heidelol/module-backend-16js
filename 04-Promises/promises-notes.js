// Las promesas son objetos
// Constructor: Promise
// Para instaciar : New, para poder crear un objeto de un constructor
// Los promise reciben callbacks

// RESOLVE es una función que nos permitirá pasar la promesa de pendiente a resuelta
// REJECT es una función que nos permitirá pasar la promesa de pendiente a rechazada



// const myPromise = new Promise((resolve, reject) => {
//     // Lógica interna
//     const todoBien = ture;
//     if (todoBien) {
//       resolve("oki, todo bien");
//     } else {
//       reject("Todo salió mal u.u ");
//     }
//   });
  
  // Los objetos de tipo promesa, cuenta con dos métodos: then() y catch()

// then () Se ejecuta cuando la promesa se resolvió exitosamente
// Recibe lo que mandamos en la función resolve
// catch() Se ejecuta cuando la promesa ha sido rechazada
// Recibe lo que mandamos en la función reject

// myPromise.then();
// myPromise.catch();


//   myPromise
//     .then((result) => {
//       console.log(result); // 'Oki'
//     })
//     .catch((error) => {
//       console.log(error); // 'no se que pasó'
//     });

    // wrapper en una funcion

    function myFirstPromise() {
         return new Promise((resolve, reject) => {
            const todoBien = true;
            if (todoBien) {
              resolve("oki, todo bien");
            } else {
              reject("Todo salió mal u.u ");
            }
         })
    }

    myFirstPromise()
        .then((result) => {console.log(result)})
        .catch((error) => {console.log(error)})


    // const myFirstPromise = () => {
    //     return new Promise(() => {})
    // }

    // const myFirstPromise = () => new Promise(() => {})

    // function getString() {
    //     return 'fernanda'
    // }

