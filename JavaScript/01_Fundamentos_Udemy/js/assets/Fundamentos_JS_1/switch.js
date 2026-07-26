const dia = 3;

switch(dia) {
case 0:
console.log("Hoy es domingo");
break;
 case 1:{
    console.log("Hoy es lunes")
    break;
 }
 case 2:
    console.log("Hoy es martes")
    break;
    default: console.log("Cualquier otro dia diferente a domingo lunes o true")
}
"switch" // switch en JavaScript es una estructura de control que sirve para evaluar una sola expresión y ejecutar un bloque de código según su valor.
//  Es una alternativa más limpia que usar muchos if...else if.
// Para romper la lógica del switch se necesita un Break. 
//switch (expresion) {
//  case valor1:
//  Código si expresion === valor1
//  break;}
// const ejemplo = algo
// Imagina el valor (expresion=== algo). es como si tuviera un comparativo.Se pueden crear x cantidad de casos. 