// function saludar(nombre){
//     return `Hola ${nombre}` 
// }

const saludar = (nombre = 'Peter') => `Hola ${nombre}`

const nombre = 'Tony'

// console.log(saludar());

const getUser = () => ({   
    uid: 'ABC123',
    username: 'Tony001'    
})

// console.log(getUser());

const heroes = [{
    id: 1,
    name: 'Batman'
    },
    {
     id: 2,
     name: 'Superman'
    }]

const existe = heroes.some(hero => hero.id === 1) 
const {id, name} = heroes.find(hero => hero.id === 1) 

console.log( name );

