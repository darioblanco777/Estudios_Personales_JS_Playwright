const regresaFalse = ()=>{
console.log("Regresa False");
return false;
}



const regresaTrue = ()=>{
console.log("Regresa true");
return true;
}

let falso = console.log(!regresaFalse())
let verdad = console.log(!regresaTrue())
//console.log("invierte",!true)
//console.log("invierte",!false).


// El operador "and" dara true, si todos los valores son verdaderos.
console.warn("AND")
console.log(true && true) // deberia dar true
console.log(true && !false)// deberia dar false, pero si le hago negación "!", flipas. lo vuele a dejar true. wowww
// eso quiere decir que primero ingresa la negación ! , y luego la comparacion booleana. 

// EJERCICIO ADICIONAL//
console.log(regresaFalse() && regresaTrue())
// Cuando usamos and "&&", pero la primera instruccion ya regreso falso. 
// no siga la logica pues sabe que el resultado será falso. 
// Invirtamos el ejercicio: 
console.log(regresaTrue() && regresaFalse()) // En este caso como el primero fue true dio paso a la siguiente lógica. 
// Es condicionar el código: Es como decir ejecutame la segunda si solo si la primera es verdadera.
// Caso contrario ocurre con el "OR",con que una sola condicion sea verdadera el resultado es "true", 
// Entonces si ya la primera condicion es true y la segunda false, no tiene necesidad de confirmar la segunda. 
console.warn("OR")
console.log ("miremos",false || !true ||false )
//resultado : TRUE, solo dara false si todo el false

//-----------Crear_Servidor--------------------------
//const http = require("http");
//
//const servidor = http.createServer((req, res) => {
//    res.end("Hola desde Node.js");
//});
//
//servidor.listen(3000, () => {
//    console.log("Servidor iniciado");
//});
console.warn("Asiganciones")

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;
//-------// Ejercicio 1-------------
const X1 = !false && "hola mundo" && 458;
console.log({X1,})
// Como es un false invertido (true) lee en consola el ultimo valor "458"
// Cuando al principio tenemos un false, ahi muere toda la logica y no sigue imprimiendo en consola.
const x2 = "hola" && "Cochinitos" && 4689
console.log(x2,{x2}) // sigue leyendo el último.

const x3 = true && true && soyFalso
console.log("x3",{x3})

const x4 = [(true)  || ("pepo")] 
console.log(typeof"x4",{x4})

//-----------------------------//\\------------------------------\\
