/*
Construir, aplanar y pintar un muro

1.- Construir el muro
2.- Aplanar el muro
3.- Pintar el muro

*/

const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}

// function contruir(muroAConstruir){
//     muroAConstruir.estaConstruido = true
//     return muroAConstruir
// }

// function aplanar(muroAAplanar){
//     muroAAplanar.estaAplanado = true
//     return muroAAplanar
// }

// function pintar(muroAPintar){
//     muroAPintar.estaPintado = true
//     return muroAPintar
// }

// const muroConstruido = contruir(muro)
// console.log('muroConstruido: ', muroConstruido)
// const muroAplanado = aplanar(muroConstruido)
// console.log('muroAplanado: ', muroAplanado)
// const muroPintado = pintar(muroAplanado)
// console.log('muroPintado:', muroPintado)

//Asyncrona

// function construir(muroAConstruir, callback){
//     setTimeout(() => {
//         let error = null
//         muroAConstruir.estaConstruido = true
//         if(muroAConstruir.estaConstruido == false){
//             error = 'no se pudo construir'
//         }
//         callback(error, muroAConstruir)
//     }, 3000)
// }

// function aplanar(muroAAplanar, callback){
//     setTimeout(() => {
//         let error = null
//         muroAAplanar.estaAplanado = true
//         if(muroAAplanar.estaAplanado === false){
//             error = 'no se puedo aplanar'
//         }
//         callback(error,muroAAplanar)
//     }, 3000)
// }

// function pintar(muroAPintar,callback){
//     setTimeout(() => {
//         let error = null
//         muroAPintar.estaPintado = true
//         if(muroAPintar.estaPintado === false){
//             error = 'no se pudo pintar'
//         }
//         callback(error, muroAPintar)
//     }, 3000)
// }


// construir(muro, (error,muroConstruido) => {
//     if(error){
//         console.log('Error: ',error)
//         return
//     }
//     // ya tengo muro construido
//     console.log('Muro construido: ', muroConstruido)
//     aplanar(muroConstruido,(errorAplanar, muroAplanado) =>{
//         console.log('muroAplanado: ',muroAplanado)
//         pintar(muroAplanado,(errorPintar, muroPintado) =>{
//             console.log('MuroPintado: ', muroPintado)
//         })
//     })
// })

/*
Proceso inscripcion a Kodemia

1.- entrevista
2.- oferta
3.- inscripcion
4.- Asistir a clases
*/

const kodemia = {
    entrevistaPasada: false,
    ofertaAceptada: false,
    inscripcionPagada: false,
    asistirClases: false
}

function entrevista(platicaEntrevista, callback){
    setTimeout(() => {
        let error = null
        platicaEntrevista.entrevistaPasada = true
        if(platicaEntrevista.entrevistaPasada === false){
            console.log('entrevista no pasada')
        }
        callback(error, platicaEntrevista)
    }, 3000)
}

function oferta(aceptandoOferta, callback){
    setTimeout(() => {
        let error = null
        aceptandoOferta.ofertaAceptada = true
        if(aceptandoOferta.ofertaAceptada === false){
            console.log('no tome la oferta')
        }
        callback(error, aceptandoOferta)
    }, 3000)
}

function inscripcion(pagarInscripcion, callback){
    setTimeout(() => {
        let error = null
        pagarInscripcion.inscripcionPagada = true
        if(pagarInscripcion.inscripcionPagada === false){
            console.log('no se pago la inscripcion')
        }
        callback(error, pagarInscripcion)
    }, 3000)
}

function asistencia(clasesAsistida, callback){
    setTimeout(() => {
        let error = null
        clasesAsistida.asistirClases = true
        if(clasesAsistida.asistirClases === false){
            console.log('no asistio a clases')
        }
        callback(error, aceptandoOferta)
    }, 3000)
}

entrevista(kodemia, (error, entrevistaTomada) => {
    if(error){
        console.log('Error; ', error)
        return
    }
    console.log('entrevista: ',entrevistaTomada)
})

