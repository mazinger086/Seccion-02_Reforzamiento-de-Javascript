

import { heroesByID } from './bases/08-imp-exp';

// console.log('Inicio');

// new Promise( (resolve, reject) => {
//     console.log('Cuerpo de la promesa');  
//     resolve('Promesa resuelta')  
//     //reject('Promesa resulta con error')     
// })
// .then( console.log ) // retorna implicitamente el msj
// .catch( console.log ) // retorna implicitamente el msj


// console.log('Fin');


const getheroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            const hero = heroesByID( id )

            if(hero){
                resolve( hero )
            } else {
                reject('El heroe no existe')
            }
            
        }, 1000);

    });
}


getheroByIdAsync(2)
.then( h => console.log(`El heroe es: ${h.name}`))
.catch(err => console.log(err))


























// import { heroesByID, getHeroesByOwner } from './bases/08-imp-exp';

// console.log(heroesByID(2));

// console.log(getHeroesByOwner('Marvel'));