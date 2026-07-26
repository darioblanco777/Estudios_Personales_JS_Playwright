// FUNCIONES ()
//Una función en JavaScript es un bloque reutilizable de código que encapsula una tarea o comportamiento específico. Puede recibir datos de entrada (parámetros), 
//procesarlos y devolver un resultado (return).
//let a = 5;
//let b = 10;
//function sumar(a, b) {
//    return a + b;
//}
//let resultado = a+b;
//let resultado1 = a*b;
//let resultado2 = a-b;
//let resultado3 = a/b;
//sumar();


//console.log(resultado,resultado1,resultado2,resultado3)
// Funcion es independiente , método es una función dentro de, o que pertenece a un objeto.

// Método 1 para definir funciones.
//function sumar(a,b) {
   // return a + b;
    ;
//}
//alert("Suma exitosa ?")
//let resultado =sumar(20,30) ;
//console.log(resultado)
// Método 2 para definir funciones.

//const saludar = function(personaje){
//console.log("Hello" + personaje[0])
//} 
//let regard = saludar([" Dario",20," Casado & guapo",true]);

// Función Flecha 
let listaNames = [4, "camilo","david"]
const saludarTodos = (listaNames)=> {
    listaNames.forEach(alumno => {
    //console.log("hola queridos alumnos " + alumno)
    function saludar (name){
            //console.log("Quiero Ruts" + name) 
                            };
return saludar("Dario")
        });
        };
        

        
 // console.log("Sera que si lo imprime ? la respuesta es no porque return para el código")

// El return se hace efectivo , justo cuando llamemos la función, y debe usarse dentro de una función siempre.
const retornoSaludar = saludarTodos(listaNames);
console.log({retornoSaludar})
//Una forma de recordarlo es:
//console.log() muestra algo.
//return entrega algo.pero es importante saber que tan pronto se llega a un return, se sale de la función , 
// Si habia más código por debajo del return, no será leido.
// la función flecha se escribe así : 
let multiplicar = (a,b)=> {a*b;
return 1}
//console.log(multiplicar(45,23));


// Seguimos 
function getAleatorio (a) {
    const circle =((Math.PI * 3)/a);
     console.log (circle)
}
getAleatorio(1000)

// Tambien permite llamarla asi "const getAle"
const getAleatorio2=()=> Math.random();
console.log(getAleatorio2())
