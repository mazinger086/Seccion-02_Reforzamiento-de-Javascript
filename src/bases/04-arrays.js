const arreglo = [1,2,3,4];

arreglo.push(5);

const arreglo2 = [...arreglo ]; // rompes la referencia y creas un nuevo array en base al arreglo1
arreglo2.push(6)

const arreglo3 = arreglo2.map(n => {
    return n * 2
})

arreglo3.push(14)

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);