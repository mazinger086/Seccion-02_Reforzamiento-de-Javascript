
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 523355,
        lat: 14.532,
        lon: 34.888
    }

}

const persona2 = {...persona }; //  Con el spread operator creas el objeto sin cambiar el original
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
