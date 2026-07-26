// los primitivos se pasan por valor.
// los objetos se pasan por referencia.Recordemos en JS todo es objeto exceptuando los primitivos.

// Spread Operator (...)// → "Expandir";
//Se usa para desempaquetar elementos de un array o propiedades de un objeto.
const numeros = [1, 2, 3];
const copia = [...numeros];
console.log(copia);

// Ejemplo 2 
const a = [1, 2];
const b = [3, 4, 5, "tierra"];
const resultado = [...a, ...b];
console.log(resultado);
// Si tengo un arreglo podemos utilizar el metodo de slice.
// Console.time (), sirve para medir el rendimiento de los aplicativos. 