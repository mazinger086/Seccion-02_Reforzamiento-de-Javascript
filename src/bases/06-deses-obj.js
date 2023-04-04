
const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

const {name, age, codeName, power = 'No tiene poder'} = person;

// console.log(name);
// console.log(age);
// console.log(codeName);

const createHero = ({name, age, codeName, power }) =>
     (
        { id:123456789,
        // Cuando la llave y el valor tienen el mismo nombre se puede omitir la llave
        name,
        age,
        codeName,
        power} 
    );
    


console.log( createHero(person) );