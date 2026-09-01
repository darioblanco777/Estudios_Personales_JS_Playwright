//Estudios personales de Java_Script// 
// URL DE GRAN VALOR/ CONOCIMIENTO https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
//console.log("HOLA MUNDO"); Un metodo es una funcion dentro de un objeto.
// "Git bash" : Bourne Again Shell, aplicación diseñada para sistemas operativos Windows que proporciona una capa de emulación para trabajar con Git y Bash en un entorno de línea de comandos.
// Bash es un intérprete de comandos y un lenguaje de programación de scripting.
// "Node" es un entorno de navegacion que nos permite correr Java Script fuera del navegador. Asíncrono y no bloqueante: Puede procesar miles de solicitudes de forma simultánea sin quedarse esperando a que una tarea pesada termine, lo que lo hace muy eficiente y escalable.
// "UTF-8" (Unicode Transformation Format - 8 bits) es el formato de codificación de caracteres más utilizado en la informática y en internet. 
// Crear rapido estructura HTML"Comando" !+Tab, dentro de este aparecera la etiqueta <script> el cual se usa para incluir o ejecutar código JavaScript dentro de una página web.
// Es buena práctica dejar los archivos de js en el Body y no en el head del HTML, porque esto puede evitar que se renderice correctamente los archivos.
// "Renderizar" es el proceso mediante el cual una computadora procesa datos o instrucciones (como código, modelos matemáticos o capas de edición) para convertirlos en una imagen, video o página web visualmente completa.
// Variable: contenedor de informacion en memoria que puede en el tiempo cambiar de valor. 
// Cuando creamos una variable, la podemos dejas asi: a =10; b= 23 ; y funciona pero es mala práctica. debe llevar let o Var, esto por debido a la implementacion del ECMA_SCRIPT_5 en el 2015. estas nuevas funciones son mas compatibles a todos los navegadores.
// "Polyfill" Es un código, que provee el funcionamiento de una nueva caracteristica de (Ecma_Script_6"ES6" @ Versiones más viejas como ES5).
// Poder imprimir en consola es muy valioso porque nos permite conocer el status de una variable let x = 4, en determinado punto. 
                    //Ejm :     console.log / console.warn / console.error......entre otros.
// Cuando veamos unos parenytesis en JS es una función o un método, sin embargo recordemos que un método es una función dentro de un objeto.EJP: 
// Ejemplo : (Console= objeto) (.log = método.). Los arrelos van el llaves cuadradas [], los objetos con corchetes {}.
// Happy path ,Es la primera línea de defensa: Si el Happy Path falla, significa que la aplicación tiene un problema grave que impide a los usuarios realizar lo más básico.
// "Objeto" : Un objeto en JavaScript es una estructura que permite guardar información relacionada bajo un mismo nombre.const persona = {
        //nombre: "Gabriel",
        //edad: 41,
        //profesion: "QA Tester"
        //};''

// No usar Var como creador de variables.ellas modifican los valores del Objeto Windows. ( Mejor Let ó Cons pues no sobre escriben).VAR = Navegadores viejos.
// "<!---->", mediante este comando, comentamos lineas en HTML.
// Hay tres formas de colocar informacion por el usuario 1) Alert ("Hola mundo"), esta bloquea el código si no se hace click. 
// Hay tres formas de colocar informacion por el usuario 2) let apellido = prompt("¿Cúal es tu nombre?","Sin nombre"). Recibe valor vacio, null o caracteres. En JavaScript, null es un valor especial que representa la ausencia intencional de un valor.
// Hay tres formas de colocar informacion por el usuario 3) let verificacion = confirm("Estas seguro que quieres borrar esto?"); Cuando imprimes en consola la respuesta en un boolenano ( True or false ). 
//¿Qué es global? En Node.js, global es el objeto global.
//Rta : Es el objeto que contiene todas las cosas que están disponibles en cualquier archivo sin necesidad de importarlas. ejp JS "console.log(global);"


//SECCION 3//_UDEMY
// Temas de la sección
//En esta sección tocaremos los siguientes temas:¿Qué son los primitivos?;Palabras reservadas;
//Arreglos;Objetos literales;Funciones básicas;
//Funciones de flecha;Retorno de las funciones;Ejercicios y ejemplos con cada tipo expuesto

//"Datos_Primitivos": Información que no es un objeto y son inmutables.
//(1)Boolean true / false).
//(2) Null, Sin valor en lo absoluto).
//(3) Undifined,Variable declarada, a la que aún no se le asigna valor.
//(4) Números enteros, decimales etc.
//(5) String, cadena de carácteres como palabras, nombre de personas etc.
//(6) Symbol, Es un valor único que no es igual a ningún otro valor.


// Cuando queremos saber que tipo de valor primitivo es usamos: console.log(typeof nombre)
// En JavaScript, las variables suelen nombrarse usando el CamelCase. ejp let MiCoche = "AMG 35 Mercedes Benz".
// En JavaScript todos son objetos exceptuando los primitivos. 
// Ejp: let MiNombre = null; console.log (typeof MiNombre); Aparecerá en consola que es un Objeto (Curioso)
// Los datos primitivos Symbol, le permitem crear identificadores únicos a JS.
// Los nombres en JS,No deben ser Case Sensitive. Por que si trabajamos con Servidores linux es muy probable que no lo encuentre. <script src="js/assets/palabras-reservadas.js"></script> "No usar CaseSensitive"."ñ"
// Las variables no pueden ser iniciadas con números ejp let 1abc  = "perro", si se puede let $123
// En conclusion Lower Camel Case ( Variables, empieza la variable con minúscula. Upper Camel Case para las Clase (Primera letra variable en mayúscula).


// Arreglos contienen información; no son necesariamente del mismo tipo de valor primitivo. Los arreglos siempre van en llaves[], y empiezan en la posicion (cero).
// Ejemplos :  let arr = new Array(5)
 // console.log(arr) => (5) [vacío × 5],cuando colocamos typeof como atributo en consola no reconoce que es un arreglo, por ello es mejor usar: Array.isArray(arreglo2); donde arreglo2 es el contenedor del array [].
// dentro de los arreglos, es posbible almacenar cualquier cosa. numeros, operaciones, stings, funciones, booleanos entre otros. 
// tip "Dentro de los arreglos no es posible declarar variables con let ", de hecho es posible declarar [] dentro del arreglo sin necesidad de let. wooo 🙆🏻 / Tip "return" solo funciona dentro de una función.
   // Ejemplo de return function obtenerValor() {
   // let respuesta = arreglo3[5][4][0];
   // return respuesta;


// Los métodos son fuciones internas de los arreglos que se ejecutan poniendo un ();las propiedades son una especie de variable que tambien esta dentro de los arreglos. 
// forEach() está diseñado principalmente para arreglos,for each es una instruccióna a ejecutar en cada elemento del array.  
//const frutas = ["manzana", "pera", "uva"];
//  frutas.forEach(fruta => {
//  console.table(fruta);}); Cuando revisamos consola imprime cada uno de los elementos que compone el arreglo fruta[]
// Cuando queremos insertar un elemento en un arreglo al final, utilizamos el "Arrayname.push()"
 let nuevoGame = juegos.push("Biohazard")
console.log (nuevoGame,juegos[4])

// Si quiero anexar al principio un nuevo elemento al arreglo utilizaremos Arrayname.unshift()
juegos.unshift("Mario Bross");
juegos.forEach(element => {
    console.log(juegos)
});
console.log(juegos[0]);

// Si quiero eliminar un elemento del array, utilizaremos : Arrayname.pop (), sin Argumentos. 

let juegoBorrado = juegos.pop();
console.log(juegoBorrado)

// Si quiero eliminar cierto elemento del arreglo. ( No el primero ni el último)
let pos = 2;
console.log(juegos)
let nuevoJuegoarray = juegos.splice(pos,3)
console.log (nuevoJuegoarray)

// Si quiero saber cual es la exacta posición index de un elemento del Arreglo usamos:
let Biohazardindex = juegos.indexOf("Biohazard");
console.log(Biohazardindex)

// JavaScript, tiene dos tipos de datos principales (Primitivos & objetos),Si no es un dato primitivo definitivamente será un Objeto.
//OBJETO = "Esta es la sintaxis de un objeto literal, es importante recordar que siempre lleva una (clave :valor) y va con corchetes.

let personaje = {
    nombre:"dario",
    apellido :"Bernal",
    edad:40,
    vivo:true,
    hobbies:["pelis","libros","leggos"],
    direccion:{postal:"46250",
               barrio:"Ciudad tintal",
               }
};
let timeoff = console.log("Información",personaje);
console.log("Que juegas",personaje.hobbies[2],personaje.direccion.postal)
let cantidadHobbies = console.log("CantidadHobbies",personaje.hobbies.length)
// Más detalles sobre Objetos literales: Como borrar una propiedad del objeto primitivo (clase:valor)
//delete personaje.apellido;
// Si tengo un objeto literal ejp 
// "let personaje {
//    nombre:"dario",
//    apellido :"Bernal",
//    edad:40,
//    vivo:true,
//    hobbies:["pelis","libros","leggos"],
//    direccion:{postal:"46250",
//               barrio:"Ciudad tintal",
//
// }
//};", y lo cambio por un "const personaje",aún asi permitirta que se anexen o quiten propiedades
// dentro del mismo. No significa que por usar const queda blindado con los datos. lo que si evita es que sea re asignado el valor asi " personaje = 123".
// Quieres todas las propiedades de  mi objecto ? aqui vamos 
const propiedadesArreglo = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(valores)


// FUNCIONES 
//Una función en JavaScript es un bloque reutilizable de código que encapsula una tarea o comportamiento específico. Puede recibir datos de entrada (parámetros), 
//Funcion es independiente , método es una función dentro de, o que pertenece a un objeto.

//procesarlos y devolver un resultado (return).
// Método 1 para definir funciones.
function sumar(a,b) {
    return a + b;
    prompt ("Es correcta la respuesta? ");
}
let resultado =sumar(20,30) ;
console.log(resultado)
// Método 2 para definir funciones.

const saludar = function()
{ console.log("Hello world");
        
}
saludar();

//Una forma de recordarlo es:
//console.log() muestra algo.
//return entrega algo.pero es importante saber que tan pronto se llega a un return, se sale de la función , 
// Si habia más código por debajo del return, no será leido.
// Es posible returnar muchas cosas ejp : strings, arreglos & hasta funciones. 
// Ejemplo : let listaNames = [4, "camilo","david"]
const saludarTodos = (listaNames)=> {
    listaNames.forEach(alumno => {
    console.log("hola queridos alumnos " + alumno)
    function saludar (name){
            console.log("Quiero Ruts" + name) 
                            };
return saludar("Dario")
        });
        };

// la función flecha se escribe así : 
let restar = (a,b)=> (a-b);
console.log(restar(45,23))

// Video # 29 Pro_Tips.
// Si colocamos los nombres de los atributos igual al de las propiedades no necesitamos escribirla o definirla de nuevo.
function crearPersona (nombre,apellido) {
return {nombre :nombre,
        apellido :apellido
}}
const usuario = crearPersona("Dario","Bernal")
console.log(usuario)

// Tambien funciona si la dejamos asi : 
function crearPersona (nombre,apellido) {
return {nombre,apellido}
}
const usuario = crearPersona("Dario","Bernal")
console.log(usuario) // Atributos igual a propiedades.
// Ahora funcion Flecha :
const usuario = (nombre,apellido)=> {return "nombre","apellido"}
console.log(usuario("Dario","Bernal"))


// EJEMPLOS ADICIONALES PRO TIPS 
const crearUser = (usuario1,usuario2,usuario3)=> {{console.log(miembro1)}
{console.log(miembro2)}
{console.log(miembro3)}
}

const miembro1={edad :40,
    casado : true,
    hobby: "leer",
    nombre:"Pepe"
}
const miembro2={edad :23,
    casado : true,
    hobby: "leer",
     nombre:"LEONEL"
}
const miembro3={edad :46,
    casado : true,
    hobby: "leer",
    nombre:"Matin"
}

user1 = crearUser(miembro1,miembro2,miembro3)

//En una funcion flecha (...)=> Parametro Rest une todos los argumentos en una sola variable y lo transforma en un arreglo.
// En cambio si se utilizan fuera de estos paréntesis, se llama Spread y lo que hace es romper las referencias.
// SECCION 4 UDEMY. Temas de la sección
//En esta sección tocaremos los siguientes temas://Estructuras de control de flujo
//Paso de variables por valor y por referencia //Romper referencia de objetos
//If y Else
//Un poco sobre lógica booleana
//Operadores y operadores de asignación
//Operador condicional ternario
//Diferentes usos del operador condicional ternario.


let QUEES = ("Estructura de control");// TEORIA
// Permiten alterar la linea de flujo del código. 
// En la logica booleana"JS",si queremos cambiar un valor booleano lo hacemos colocando 
// simplemente ! antes del true or false.ejp console.log(!false)= true

// las comillas tipo Backtick, me permiten concatenar sin tener que colocar el simbolo aritmetico "+", ejp let boys = 5.
let boys = 5;
console.log ("look",`yo tengo ${boys} hijitos`) 

//------------------Video 40 --------------------------------SWITCH-------
"switch" // switch en JavaScript es una estructura de control que sirve para evaluar una sola expresión y ejecutar un bloque de código según su valor.
//  Es una alternativa más limpia que usar muchos if...else if.
// Para romper la lógica del switch se necesita un Break. 
switch (expresion) {
  case valor1:
    // Código si expresion === valor1
    break;}
// const ejemplo = algo
// Imagina el valor (expresion=== algo). es como si tuviera un comparativo.Se pueden crear x cantidad de casos. 


//----------------------video 42-------------------------CICLE FOR --------
// La definición fundamental del ciclo for es:
//El ciclo for es una estructura de control que permite repetir un bloque de código un número determinado de veces.
// Está compuesto por tres partes: inicialización, condición y actualización.
for (inicialización; condición; actualización) {
    // Código que se repite
}
inicialización ("Se ejecuta una sola vez, al comenzar el ciclo.Generalmente se declara una variable contadora.")
condición("Se evalúa antes de cada iteración.Si es true, el ciclo continúa.Si es false, el ciclo termina")
actualización("Se ejecuta al finalizar cada iteración.Normalmente incrementa o decrementa el contador.")

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
// la carpeta assets por lo general se asigna a folders que no seran removidos. ( Recursos estaticos)


// Comprobar que algo es un arreglo ? 
console.warn("Sintaxis")
console.log(Array.isArray(MazoDealer));

// tips para dominar el DOM "seleccionar elementos del DOM":
document.querySelector("img") // la primera img
document.querySelectorAll("img") // toda la baraja en este caso."Devuelve por lo general un arreglo"

console.warn("DOM SEGUNDA PARTE TIPS_UDEMY")
// Creacion de Elementos desde el DOM que no existen en el HTML.file
// <div class="row mt-2"> : Crea una fila del sistema de cuadrícula (Grid) de Bootstrap.
//Sirve para organizar columnas (col) horizontalmente.

Ejemplo:

<div class="row">
    <div class="col">Columna 1</div>
    <div class="col">Columna 2</div>
</div>

// Desde console podemos guardar en variables ejp un <div>
const divBotones = document.querySelector("#divBotones");
// Si queremos crear desde consola mismo un boton por ejemplO usamos: 
const BotonDestruccion = document.createElement("button");
// Luego de crearlo lo anexamos a algún div, class etc asi :
divBotones.append(BotonDestruccion);
// Luego de anexarlo, le podemos cambiar o colocar nuevo nombre asi :
BotonDestruccion.innerText = "salvacionClick"
// Queremos agregarle la misma clase de botones ya creados previamente asi :
BotonDestruccion.classList.add("btn-EXAMPLE") 


console.log("Que es use_strict") // 'use strict' en JavaScript activa el modo estricto (Strict Mode).
//Su objetivo principal es hacer que JavaScript sea más estricto con ciertos errores, 
// evitando comportamientos que pueden generar bugs.
ejemplo 
'use strict'; // Se una mucho cuando tenemos funciones de flecha anonimas.
let nombre = "Darío"; // Exige que la variable sea definida con let,var o const.
ejemplo
nombre = "Darío";// Sin use strict no es necesario, pero esto podria crear accidentalmente una variable global.
console.log(nombre);



//SECCION 7//_UDEMY 12_Agosto_2026
console.log("Prototype")
// En JavaScript, prototype es un mecanismo que permite que los objetos 
// hereden propiedades y métodos de otros objetos, es como el ADN de un objeto.
//Temas de la sección
//Clases
// Sets
// Gets
// Métodos estáticos
// Gets estáticos
// ESNext: Propiedades privadas (aún no soportado completamente)
// Singletons
// Multiples constructores
// Esta sección es fundamental para la programación moderna de JavaScript, nos servirá mucho en el futuro y recuerden que al final de la sección tienen el código fuente.


console.log ("Set & Get")
//Sí. get y set están muy relacionados con las clases y los objetos, porque permiten controlar cómo se leen y cómo se modifican las propiedades de un objeto.
//Piensa primero en esto:

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
const persona1 = new Persona("Darío", 41); // Normalmente puedes hacer:
console.log(persona1.nombre);
persona1.edad = 42; // Aquí JavaScript permite acceder y modificar directamente las propiedades.




// ¿Qué hace get? : get permite leer una propiedad mediante un método 
// que se comporta como si fuera una propiedad normal.

class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    get informacion() {
        return `${this.nombre} tiene ${this.edad} años`;
    }
} // Creas el objeto: 
const persona1 = new Persona("Darío", 41);
console.log(persona1.informacion);  // rta : Darío tiene 41 años

// Recordemos: Que es Métodos?:Son funciones asociadas a las instancias:

class Persona {

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

// orden de la creacion de la clase y obejto. 
1("Propiedades & métodos estaticos")
2("Propiedades de la clase")
3("Constructor")
4("Set & Gets") // los sets solo reciben un argumento (), es una funcion con la palabra reservada set
5("Métodos")
// La idea general es:
//Clase → se define su estructura → new crea una instancia → el constructor inicializa sus datos → 
//luego puedes usar getters/setters y métodos.

//¿Qué son bundlers?
//Son "empaquetadores". Toman todos los archivos de tu proyecto (múltiples archivos JS, CSS, imágenes) y los combinan o unen en unos pocos archivos ligeros
// y optimizados para que el navegador los lea de forma eficiente.

//------------------------------------SECCION 8 -------------------------------------------

console.warn("Webpack") //  El bundler clásico y el estándar de la industria por años.
console.warn("TurboPack") // TurboPack: El sucesor moderno de Webpack (construido en el lenguaje Rust). Está diseñado para ser extremadamente rápido 
// y solucionar los problemas de lentitud de Webpack.
console.warn("Vite") // Una herramienta de desarrollo ultrarrápida. A diferencia de los bundlers tradicionales, Vite no empaqueta todo el código en desarrollo; aprovecha los módulos nativos del navegador para que los cambios se reflejen al instante al guardar.
// probemos que pasa despues de esto 