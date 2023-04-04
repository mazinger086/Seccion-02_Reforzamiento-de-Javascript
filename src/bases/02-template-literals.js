


const nombre = 'Daniel'
const apellido = 'Lasauskas'

const nombre_completo = `${nombre} ${apellido}`

// console.log(nombre_completo);
// console.log(`Resultado: ${1 + 1}`);

function getSaludo( nombre ){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);