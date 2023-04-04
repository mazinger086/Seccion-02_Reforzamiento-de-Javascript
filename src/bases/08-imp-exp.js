
import superHeroes from '../data/heroes';

// console.log(superHeroes);

// Crear dos funciones heroesByID y heroesByOwner 

// function heroesByID(id) {
//    return superHeroes.find( heroId => heroId.id === id );
// }

export const heroesByID = id => superHeroes.find( hero => hero.id === id );

// console.log(heroesByID(2));


// function getHeroesByOwner(owner){
//     return superHeroes.filter(heroOwner => heroOwner.owner === owner)
// }

export const getHeroesByOwner = owner => superHeroes.filter(hero => hero.owner === owner);

// console.log(getHeroesByOwner('Marvel'));