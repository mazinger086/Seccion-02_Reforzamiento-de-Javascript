
const miPromesa = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            // resolve('Tenemos un valor en la promesa')
            reject('Tenemos un error en el valor de la promesa')
        }, 1000)
    })
}


const medirTiempoAsync = async() => {
    try {
        console.log('Inicio');

        const respuesta = await miPromesa()
        console.log(respuesta);

        console.log('Fin'); 
    } catch (error) {
        // return 'Catch en medir tiempo Async' 
        throw 'Error en medirTiempoAsync'
    }

   
}




medirTiempoAsync()
    .then(valor => console.log(valor)) // Con los return retornamos valores esperados en el .then
    .catch(err => console.log(err)) // en este caso lo catchea por el throw por que es un error
    

