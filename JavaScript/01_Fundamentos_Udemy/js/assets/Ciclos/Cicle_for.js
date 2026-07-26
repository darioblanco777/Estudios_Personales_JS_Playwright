//-------------CICLO----FOR---------------\\
console.warn("For-Tradicional")
const coches =["mazda", "Mercedezbenz","toyota","Susuki","BMW"];
let c = 0;

for (let c = 0; c< coches.length; c++){
console.log(coches[c]);
}  

console.warn("For-in")
for (let c in coches){
    console.log(coches[c])
}
//for-in (indices), podemos hacer los mismo para con código más corto.
//for-in: Recorre los índices de un arreglo o las propiedades de un objeto.


console.warn("For-of")
//for-of: Recorre directamente los valores de un objeto iterable (como un arreglo o un string).
for(let coche of coches){
    console.log(coche)
}
// Asignamos en lugar de "c", una variable en singular que imprimira los elementos del array.
