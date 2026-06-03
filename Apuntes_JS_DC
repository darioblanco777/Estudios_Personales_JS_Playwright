// La conexión del HTML con el JavaScript se hará por regla general al FINAL del documento de HTML ANTES de cerrar el BODY ya que generalmente, los scripts suelen tener tiempos de carga más lentos. Para conectar un archivo .js con un documento de html, se agrega la siguiente linea:
<script type="module" src="./src/index.js"></script>;

// JavaScript es un lenguaje de programación creado para dar dinamismo a las páginas web. Es interpretado, orientado a objetos, debilmente tipado y dinámico:
//* INTERPRETADO:
//es la caracteristica natural de un lenguage de programación de ser leida renglon por renglon.
//* ORIENTADO A OBJETOS:
//Esto significa que el lenguaje fue diseñado con el objetivo de crear un objeto que guardara información de diversas fuentes y caracteristicas. Ej: Una red social que es un unico objeto y que quienes crean sus usuarios, incluyen la información.
//* DEBILMENTE TIPADO:
//Ej: 4 + "7" = 47; 4 * "7" = 28; 2 + true = 3; false - 3 = -3...
//* DINAMICO:
//Es la caracteristica de los lenguajes de programación de poder funcionar sin tener que ser previamente compilados. Javascript posee una caracteristica denominada V8 mediante la cual hace una compilación interna por ramas, interpreta o mejora el código y envía al navegador el resultado que mejor encuentra. Así que pordemos decir que JS es compilado, pero no como los demás lenguages que tienen que ser compilados con anterioridad para funcionar.

// Existen en Javascript dos componente principales:
// 1. Data que guardamos en memoria (variables)
// 2. Tareas (funciones) que haremos con esa data.

//!     TIPOS DE VALORES
//* PRIMITIVOS =>
// Números: 40
// Strings: "Daniel Calle"
// Booleano: George Boolean es el creador y lo que nos permiten es usar los valores verdadero(true) y falso (falso)
// Null:
// Undefined:

//* NO PRIMITIVOS =>
//Arrays: [1,2,3]
// Objetos: {nombre: "Daniel",}

//!     VARIABLES
//Una variable es una representación de algún lugar en memoria que vamos a reservar para guardar algún valor.
//? Ej:
var nombre = "Daniel";
//El ";" nos indica que finaliza una sentencia, hace parte de las buenas practicas de JS.
//Hay dos estados de una variable:

// * DECLARAR
// Se pone la palabra reservada var, let o const, y el nombre de la variable. Le indicamos a JavaScript que nos reserve esa palabra en un espacio de la memoria.
//? Ej:
var edad;

// * INICIALIZAR
// Es el proceso mediante el cual le damos un valor a la variable que ya con anterioridad declaramos. Se usa el simbolo "=" para asignar el valor a la variable.
//? Ej:
edad = 32;
//Se puede declarar e inicializar al tiempo
//? Ej:
var elementos = ["coumputadora", "celular", "reloj"];
// Tanto arreglos (arrays) como objetos se declaran de la misma manera.
//? Ej:
var persona = {
    nombre: "Diego",
    edad: 30,
};

//!-------------------------FUNCIONES---------------------------------

// Son un conjunto de sentencias,que podemos usar para realizar acciones con variables. Son tareas que calculan o generan resultados que queremos.
// Se suelen declarar las funciones al inicio del código. Para declarar funciones, es buena practica usar verbos ya que generalmente las funciones hacen acciones.

// Existen dos tipos de funciones principalmente:

//!     FUNCIONES DECLARATIVAS
// Son las funciones que se declaran para que Javascript reserve entonces un espacio de memoria con ese nombre y el calculo que hay en su interior. Se declaran con la palabra reservada "function"
// ? Ej:
function funcionDePrueba() {
    // Este es el nombre de cómo conoceremos a la función. La principal diferencia entre una función y una variable, es que la función necesita de los parentesis mientras que la variable no. Los parentesis sirven para declarar el nombre de la variable que vamos a usar dentro de la función.
    //Aquí va el cuerpo de la función, lo que se va a hacer la función.
    funcionDePrueba += 100; //* El += suma un valor a la variable y le asigna el resultado a la misma variable. Es igual poner x = x + 1; que x += 1
}

//!     FUNCIONES DE EXPRESIÓN O ANÓNIMAS
// Se pueden declarar con la palabra reservada var, let o const y se le asigan el calculo que debe ejectuar. La función en si no tendrá nombre, más si estará guardada en un espacio de memoria previamente declarado.
//? Ej:
var miFuncion = function () {
    return 3;
};
// Las funciones anónimas tmabién pueden ser declaradas con las llamadas "ARROW FUNCTIONS" así:
//? Ej:
const miOtraFuncion = () => {
    return 5;
};

// * Ya bien sea que nuestra función sea declarativa o anónima, para ejecutarla, debemos poner el nombre de la función (o de la variable en caso de ser anónima) y luego los parentesis vacios. Solo de esta manera la función se ejecutará.
//? Ej
funcionDePrueba();
miFuncion();
miOtraFuncion();

//!     FUNCIONES PARAMETRIZADAS
// En ocasiones vamos a utilizar más de una variable dentro de las funciones, en ese caso, se usan dentro del parentesis separadas por comas com parametros y se definen dentro de la función.
function addTwoNumbers(x, y) {
    //* Se puede usar la función ParseInt de JS para pasar a número entero un valor string que definamos por ejemplo a traves de un prompt.
    const suma = x + y; // Se realiza la operación con los 2 valores que más adelante yo mismo le indique. Podrían llevar ambos valores la función ParseInt para que automaticamente me tome los datos de forma numérica en caso de haberlos agregado, por ejemplo, mediante un prompt.
    document.write(suma); //Me imprime en pantalla el resultado de la suma arimética.
    return suma; // La funcioón return, es la que me va a dar el valor final de la función. Incluso puedo asignarle un valor X pero la función quedaría infuncional, ya que si hice una variable es para que haga algo y me retorne ese algo, no para que me retorne un valor predefinido. //* Return se puede usar incluso al momento de definir la operación de la función en el cuerpo.
    //? Ej: return (x + y);
}
const resultado = addTwoNumbers(5, 10); //Luego llamamos la función y definimos los valores de X y Y..
document.write(resultado);
//En JS, se establece dentro de los paréntesis los nombres de las variables que usaremos dentro del cuerpo de la función, y en HTML o al momento de llamar la función, se ingresan los valores entre parentesis que van a asumir las variables que estan en la definición de la función. //? Ej: function sumarNumeros (x,y){const suma = x + y;}... Al llamar la función: sumarNumeros(4,5); y la función sumará 4+5

//!     Funciones predeterminadas
//JS tiene algunas funciones predeterminadas, como document.write, o como console.log... Hay algunas más...

//* Math.random()
// Nos da un número random entre 0 y 1. Se puede multiplicar por 10 o por 100 para números entre 1 y 10 o 1 y 100.

//* Math.round()
// Nos redondea hacia arriba un número con decimales.

//* Las funciones Math deben estar en MAYUSCULAS.

//* typeof _____
// Nos permite conocer el tipo de un valor.

//* .toFixed(2)
// Me redondea el número a la cantidad de decimales que le pongamos dentro de parentesis.

//* .style
//  Sirve para que una vez se haya atrapado un elemento html y se haya guardado en una variable, se pueda modificar el estilo de este desde javascript.
// Se debe agregar lo que queremos modificar:
//?Ej:
paciente.style.color = "red";
paciente.backgroundColor = "green";

//* .classList.add("body__main--testclass")
// Sirve para añadir una clase a un elemento html.

//!-------------------------SCOPE---------------------------------

// Definición: Es el "alcance" de una variable dentro de JavaScript. En otras palabras, el scope decide a qué variables tengo acceso en cada parte del código.
// Exiten dos tipos de Scope:
//!     SCOPE GLOBAL
// Se dice que una variable está en el sope global cuando está declarada fuera de una función o de un bloque.
//!     SCOPE LOCAL
// Son las variables declaradas al interior de una función o bloque y que solo pueden ser usadas donde fueron declaradas.
// ? Ej
var global = 1;
function fun() {
    var local = 2;
    return local + global;
}

// Lo que esta en LOCAL puede acceder a los valores que estan en GLOBAL, PERO lo global, NO PUEDE ACCEDER a lo que está en local.

//!-------------------------HOISTING---------------------------------

// Definición: Hosting, o elevación es el comportamiento por defecto de JavaScript de “mover declaraciones al principio” del código.

// Muy resumidamente, lo que debes tener en mente es que en JavaScript las variables declaradas con var son “elevadas” - no de forma física - a la parte superior de su scope  funcional, local o global, independientemente donde hayas hecho la declaración. Asimismo es importante recordar que JavaScript solamente eleva a declaraciones, no inicializaciones. Entender estos conceptos te permite entender cómo hoisting afecta tu código.

//!-------------------------COHERCIÓN---------------------------------

//Es la forma como JS cambia de un tipo de valor a otro tipo de valor.

//!     COHERCIÓN IMPLÍCITA
//? Ej
var a = 4 + "7";
// consola: "47"
// typeof a; => "string"
var b = 4 * "7";
// consola: 28
// typeof b; => "number"
// En este ultimo caso JavaScript asume que es una operación matemática, ya que el operador "más" en valores diferentes genera concatenación, pero en el caso de la multiplicación "*" Javascript asume que ambos son números y hace la operación.

//!     COHERCIÓN EXPLÍCITA
var a = 20;
var b = a + "";
// consola: b = 20;
// typeof b = "string"
var c = String(a);
// consola: c = "20";
// typeof c = "string"
//* Por medio del método "String()", podemos obligar a un valor numérico a convertirse en un valor tipo string
var d = Number(c);
// consola: d = 20;
// typeof d = "number"
//* Por medio del método "Number()", podemos obligar a un valor numérico a convertirse en un valor tipo string

//* Para pasar un string a número se usa también la función ParseInt()
//? Ej: parseInt(prompt("Ingrese la edad del individuo"))

//!     CONCATENACIÓN
//En JS cuando usamos el simbolo + generalmente lo usamos para la SUMA, PERO, en ocasiones, se usa para concatenar, lo que significa unir strings (lineas de texto) con números y viceversa.

//? EJ:
console.log("Esto es un string" + 12345);
// consola: "Esto es un string12345"

//? Ej:
console.log("10" * 2);
// consola: "20"
// JS automaticamente aplica la coherción y toma el valor string entre comillas y lo convierte en número..

//? Ej:
console.log("10" + 20);
// consola: 1020
// JS identifica que es un número, pero al ser dos tipos diferentes de valor (string y number), los concatena y no procede la operación arimética.

//!     ASIGNACIÓN Y COMPARACIÓN

//* ASIGNACIÓN
//Luego de haber definido una variable, sabemos que le podemos asignar un valor con el caracter "="
//? Ej:
var num;
num = 1;

//* COMPARACIÓN
//Podemos comparar un valor con otro utilizando los caracteres "==" y "==="

//* "=="
// Compara el valor en sí de dos o más valroes y regresa un valor booleano si la comparación es verdadera o falsa.
//? Ej:
3 == "3"; // true

//* "==="
// Compara no solo el valor, sino también el tipo de valor.
//? Ej:
3 === "3"; // false

// También hay otros valores de comparación
5 < 3; // false
6 > 4; // true
5 <= 6; // true
5 >= 6; // false
a && b; // "Y" compara que tanto a como b cumplen la condición
a || b; // "O" compara si a o b cumplen la condición.

//!-------------------------CONDICIONALES---------------------------------
// Son reglas que me permiten determinar si una condicion se cumple o no en mi código y poder generar acciones a partir de esta regla.

//!     IF
// Condicional que compara una condición (entre parentesis) y genera una acción (entre corchetes). Si no se cumple la condición inicial (osea es "true"), no entra al loop de if y continúa hacia el "else"
if (true) {
    // "true" es la condición que se debe cumplir, en este caso, solo con el true, ya esta validada y va a ejecutar las acciones a continuación
    console.log("Hola"); // Hola
} else {
    //Estas serían las acciones que se van a ejecutar si la validación inicial es "false"
    console.log("soy falso");
}
// En ocasiones podemos usar también la condición "else if" la cual hará otra validación si la primera no se cumple, y no queremos que simplemente entre a la iteración del "else"
if (false) {
    console.log("Hola");
} else if (true) {
    console.log("Hola 2");
} else {
    console.log("soy falso");
}

if (peso < 0 || peso > 1000) {
    console.log("Peso incorrecto");
}
// Se puede usar esta sintaxis para incluir otra condición más a nuestro if, en este caso sería: si peso es menor que 0, o, peso es mayor que mil, ejecuta este códigio...

//? Ej
var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu 1ra votación.");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo.");
} else {
    console.log("Aún no puedes votar.");
}

// * Operador ternario
// Es una manera de incluir en una sola linea el "if" y el "else" así:
//? Ej: condition ? true : false;

var numero = 1;
var pregunta = numero === 1 ? "Si soy un uno" : "No, no soy uno";

//!     SWITCH
// Es una función que nos sirve para validar condiciones, pero este va a funcionar por casos. Si el caso es verdad, ejecuta unas acciones.

//?Ej:
var numero = 1;
switch (numero) {
    case 1:
        console.log("Soy un uno!");
        break;
    case 10:
        console.log("Soy un 10");
        break;
    case 100:
        console.log("Soy un 100!");
        break;
}

//!-------------------------STRINGS---------------------------------
// Son objetos de Javasript que tiene sus propios metodos y definiciones, como también funciones. También poseen sus propias propiedades.
//* w3schools.com tiene muy buenas librerias de metodos para los strings.
// Las PROPERTIES son las funciones que DESCRIBEN el objeto.
// LOs METHODS son las ACCIONES que puede hacer el objeto.

//!     PROPERTIES
//? Ej: .length es la propiedad que me indica la cantidad de caracteres del string.
var message = "Hola mundo!";
var l = message.length;
console.log(l);
//?Ej:
var phrase =
    "Si tu no luchas por tus sueños, alguien te pagará para que luches por los suyos";
console.log(phrase.length);
//? Consola: 79

//!     METHODS
//* .chartAt
// .chartAt es un método que me muestra la letra en determinado espacio.
for (var i = 0; i < phrase.length; i++) {
    console.log(i + ": " + phrase.charAt(i));
}
//? Consola =>
//? 0: S
//? 1: i
//? 2:
//? 3: t
//? 4: u.... Cada letra hasta el espacio 78.

//* .indexOf
// .indexOf me dice el espacio que ocupa cierto caracter
console.log(phrase.indexOf("s"));

//* .replace
// Se usa para reemplazar un conjunto de caracteres con otro conjunto sin alterar la estructura original del string en memoria.
var phrase =
    "Si tu no luchas por tus sueños, alguien te pagará para que luches por los suyos";
var newPhrase = phrase.replace("sueños", "pokemons");
console.log(phrase);
console.log(newPhrase);
// Nótese que el reemplazo de una palabra por la otra, no modifica el string original, en este caso "phrase"

//* .split
//Toma un array y lo divide a traves de un caracter o un conjunto de caracteres, entonces, en vez de quedar un string, queda un array de strings.
//? Ej:
var names =
    "Juan Gabriel, María, Margarita, John, Elvis, David, Antonia, Juan Jose";
var moreNames = names.split(", ");
for (x in moreNames) {
    console.log(moreNames[x]);
}

// * .trim
// elimina los espacios que esten presentes en un string. Funciona cuando se desea guardar información en una base de datos y no se necesitan los espacios.
//? Ej:
var correo = "     danielcalleco@gmail.com      ";
console.log("'" + correo.trim() + "'");
//? Consola =>
//?'danielcalleco@gmail.com'

// * .reverse();
// invierte el arreglo.

// * .join("");
//une cada letra del arreglo en un solo arreglo

//!-------------------------ARRAYS---------------------------------
// Un array es un objeto que es capaz de GUARDAR un conjunto de valores, una colección de valores.

//!     CREACIÓN DE ARRAYS
// Para crear un array, se usan 3 diferentes formas, a este proceso se le conoce como instanciación:
//* 1. Método estandar del constructor
//? Se usa la sintaxis new Array.
var people = new Array();
people[0] = "Juan Gabriel";
people[1] = "Ricardo";
people[2] = "Margarita";
people[3] = "Isabel";
people[4] = "María";
// Entre corchetes están las posiciones. //*Los arrays SIEMPRE comienzan en CERO

//* 2. Método condensado
var food = new Array(
    "Sushi",
    "Lomo a la pimienta",
    "Espaguetti",
    "Pizza",
    "Arroz con pollo"
);
// Así no se usen números, igualmente están asignados a las mismas posiciones empezando en cero.

//* 3. Método del array literal
//Ya no es necesario poner el new Array sino que se reemplazan por CORCHETES [ ] y automáticamente el sistema los interpreta como un array.
var companies = ["Apple", "Google", "Udemy", "Facebook", "Unity"];

// Para "llamar" a las diferentes posiciones de un array, se puede usar el nombre de la variable, y en CORCHETES se ingresa la posición, recordando que inicia en CERO
//? Ej console.log (companies[3]); ==> "Facebook"

//!     PROPIEDADES DE ARRAYS
//* .lenght
// Los arrays suelen tener propiedades o atributos que nos permiten conocer información acerca del array.
//? Ej: var dim = people.lenght;
//? console.log ("El array people contiene " + dim) ==> "El array people contiene 5"
// Es importante recordar que el "largo" del arreglo tiene un valor más que las posiciones de este. People tiene 5 datos y el último está en la posición [4].

//!     MANIPULAR ARRAYS
//* Sustituir elementos
// Podemos sustituir valores de arrays o renombrarlos. Se hace llamando el array, indicando la posición y asignando el nuevo valor.
//? Ej: people [2] = Pedro. (Quitará a "Margarita" y le asignará el nuevo valor "Pedro" en el array original.)

//* Método for ( "in" )
// Sirve para recorrer un array, espacio por espacio, dandonos la posición y su valor.
const grades = [8.5, 9.3, 7.0, 6.3, 5.5, 9.4, 8.8, 7.9, 9.5, 9.5];
for (x in grades) {
    console.log("Iteración: " + x);
    console.log(grades[x]);
}
//? En consola tendremos ==>
//? Iteración: 0
//? 8.5
//?
//? Iteración: 1
//? 9.3
//?
//? Iteración: 2
//? 7.0

//* Método UNSHIFT
// Agrega un elemento al incio del array.
//?Ej:
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
var nuevaLongitud = frutas.unshift("Uvas");
// frutas ==> ["Uvas", "Manzana", "Plátano", "Cerezas"]

//* Método SHIFT
//?Ej:
// Elimina el primer elemento del array.
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
var nuevaLongitud = frutas.shift("Uvas");
// frutas ==> ["Manzana", "Plátano", "Cerezas"]

//* Método PUSH
//Agrega valores al final del array. (Esto se conoce como apendizar o append)
//?Ej:
console.log("Longitud 1: " + grades.length);
grades.push(10.0, 6.7);
console.log("Longitud 2: " + grades.length);
//? En consola tendremos ==>
//? Longitud 1: 10
//? Longitud 2: 12

//* Método POP
// Extrae el último espacio de un array.
// Como este método NO ELIMINA el valor, es recomendable crear una variable en donde quede ese valor almacenado.
//?Ej:
var poppedGrades = grades.pop();
console.log(poppedGrades);
//? En consola tendremos ==>
//? 6.7
// El usar el PUSH y el POP se conoce como metodo "pila" (de apilar, no de unidad de energía)

//* Método SORT
// Sirve para ordenar los valores de un arreglo. En caso de texto, de manera alfabética, y en caso de números, de manera ascendente.
//?Ej:
var names = [
    "Gauss",
    "Laplace",
    "Fourier",
    "Ruffini",
    "Aristóteles",
    "Pitágoras",
    "Gödel",
    "Rieman",
    "Euclídes",
    "Descartes",
    "Lebesgue",
];

names.sort();
for (x in names) {
    // console.log(names[x]);
}

//* Método SPLICE
//Sirve para eliminar trozos del array. El primer valor indica el indice del primer valor a ser eliminado y el siguiente, la cantidad de elementos que serán eliminados a partir del primero en adelante.
//?Ej:
names.splice(3, 4);
names.sort();
for (x in names) {
    console.log(names[x]);
}
//? En consola tendremos ==>
//? Aristóteles
//? Descartes
//? Euclídes
//? Lebesgue
//? Pitágoras
//? Rieman
//? Ruffini

//* Método INDEXOF
// Sirve para conocer el indice (posición) de un elemento dentro del array.
//? Ej:
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
var posicion = frutas.indexOf("Cereza");
// console.log(posicion) ==> 2

//*Método .replace
// El método replace con /(algo aquí)/g sirve para que la regla de reemplazo sea global en todo el String
const decoded = initialText.value
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e");

//!     RECORRER ARRAYS
// Existen métodos para recorrer arreglos y métodos.
//? Ej:
var articulos = [
    { nombre: "Bicileta", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

//* Método .filter
// Me crea un nuevo arreglo, y no modifica el arreglo original.
var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500;
});
//  ==> articulosFiltrados =
// [0]: {nombre: "Libro", costo: 320}
// [1]: {nombre: "Teclado", costo: 500}

//* Método .map
// Me va a ayudar a mapear los artículos, me crea un nuevo arreglo y no modifica el original.
var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
});
//  ==> nombreArticulos =
// ["Bici", "Tv", "Libro", "Celular", "Laptop", "Teclado", "Audífonos"]

//!-------------------------LOOPS - CICLOS---------------------------------
// Los loops, ciclos o bucles son el aspceto más importante de los codigos de programación ya que se puede repetir un determinado código tantas veces como se necesite. //* Cada vez que se ejecuta el bucle, se le conoce como ITERACIÓN.

//!     WHILE
var idx = 1; //* SIEMPRE las variables deben ir inicializadas por FUERA del bucle while.
while (idx <= 100) {
    //mientras la variable idx sea menor o igual a 100, el programa va a correr el codigo que colocaré dentreo de las llaves. Al contenido dentro de las llaves se le conoce como cuerpo o lógica del bucle.
    //Luego de cada ejecución, el progrma evalua si la condición del while sigue siendo verdadera. Si es verdadera, se corre el codigo nuevamente, si es falsa, irá a las siguientes linesas de código. Si la condición siempre es TRUE, se crea un bucle infinito y puede bloquear el código.
    document.write(idx + "<br/>"); //Aparecerá en la pantalla el listado de los números del 1 al 100
    idx++; //sumará 1 unidad al idx y volverá a evaluar si la condición inicial es verdadera o falsa para repetir el proceso.
}

//!     DO WHILE
//>El bucle do while se usa cuando se desea que así la condición inicial sea falsa, el código se ejecute por lo menos una vez.
var idy = 0;
do //primero ejecuta y luego evalúa en el while
{
    document.write(idy + "<br/>"); //Va a imprimir en pantalla el valor de idy desde cero hasta que se cumpla la condición
    idy++;
} while (idy < 101); //condición de continuación. Solo hasta el final del código se evalúa la condición. No al inicio como WHILE

//!     FOR
//Suele ser un bucle muy compacto que nos permite declarar la variable, la condición de continuación y la forma como el contador del propio bucle se actualizará. Suele tener 3 partes separadas por ";"
for (
    var idz = 100; //La primera parte se le conoce como declaración, en donde se decalara la varible que usaremos con su nombre y valor incial.
    idz > 0; //La segunda parte es la coindición de continuación que indica cuantas veces el bucle va a iterar.
    idz = idz - 2 //el tercer elemento es el conteo, el cual determina cómo va a varias nuestra variable contador. // idz = idz - 2 se puede representar también con idz-=2
) {
    document.write(idx + "<br/>"); //Va a imprimior en pantalla de 100 a cero la variable en intervalos de 2 en 2
} //* Se debe tener mucho cuidado con los bucles infinitos ejm: for (var i=0; i>=0 ; i++)

//!     FOR ___ OF
// Sirve de manera similar al FOR solo que la sintaxis cambia. Podemos entenderlo como inicializar una variable en singular de un arreglo en plural.

//? Ej:
var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

//!----------------------------OBJETOS--------------------------------

// Javascrip es un lenguage diseñado en un paradigma de objetos.

// Sintaxis
var miAuto = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
};
// console.log(miAuto.brand) ==> "Toyota"

//!     MÉTODOS
//* .this
var miAuto = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    detail: function () {
        console.log(`Auto ${this.modelo}${this.year}`);
    },
};
// console.log(miAuto.detail()) ==> "Auto Corolla 2020"

//*FIND
// Es un metodo que nos ayuda a encontrar algo dentro de un objeto

var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop";
});

//* FOR EACH
// No me va a crear un nuevo arreglo. Solo usa cada articulo de mi opbjeto pero no modifica el objeto original.

articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});
//? Ej:
// consola ===>
// Bici
// TV
// Libro
// Celular
// Laptop
// Audifonos

// * SOME
// Se genera un nuevo Array que recorre cada articulo y hace una validación verdadero o falso conforme a la condición que le indiquemos.

var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700;
});

//!     FUNCIÓN CONSTRUCTORA
function auto(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}
var NewCar = new auto("Tesla", "Model 3", "2020");

var NewCar2 = new auto("Tesla", "Model X", "2018");

var NewCar3 = new auto("Toyota", "Corolla", "2020");

//!----------------------------EVENTOS--------------------------------
//JS es conocido como "programación dirigida a eventos" ya que es a traves de eventos que se pueden realizar ciertas acciones. Aquí 4 de las principales:
//!     ONCLICK
//* En HTML pondremos:
//? Ej: <input type="button" value="Presioname" onclick="buttonPressed()"/>
//Luego definiremos la función en JS así:
function buttonPressed() {
    alert("Bien hecho, haz presionado el botón correctamente"); // Saldrá así un cuadro con una alerta al presionar el botón.
}

//!     ONLOAD
//De la misma manera, podemos indicarle al navegador que al cargar cierta sección de nuestro código, llame automaticamente una función ya definida así:
//? Ej: <body onload="loadingPage()">  </body>
//Se puede usar en el body, o en cuaquier sección que necesitemos. Luego en JS definimos la función:
function loadingPage() {
    alert = "Hola, bienvenido a nuestra página web"; // Aparecerá una alerta al momento de cargar la página con el mensaje que colocamos
}

//!     ONMOUSEOVER
//Podemos activar una función con solo poner el mouse sobre cierta sección que le indiquemos...
//? Ej: <input type="button" value="Parate sobre mí" onMouseOver="mouseOver()"/>
//Al ir a JS, definiremos la función así:
function mouseOver() {
    alert("Estas parado encima mío!"); // De esta manera al pasar el mouse enicma, tendremos una alerta en este caso o habremos ejecutado la función
}

//!     ONUNLOAD
//Este eveneto se ejecutará cuando salgamos de la página.
//? Ej: <body onunload="unloadingPage()">  </body>
function unloadingPage() {
    alert = "Hasta la vista, baby!"; //* En este caso NO aparecerá nada en la pantalla, ya que esta función se ejecuta al cerrar el navegador, por lo tanto, al estar cerrado, ya no habrá visualización. Se suele usar este evento para cerrar la comunicación con el servidor para que no quede abierta, o para enviar información, o limpiar la memoria, etc.
}

// Javascript es un idioma de programación que nos permite entre muchas cosas, modificar los valores de HTML y CSS del documento principal. Se puede utilizar para llamar un elemento desde HTML el siguiente método:
const prueba = getElementByID("#idDePrueba");
// Ahora, de esta manera, podémos modificar el contenido, los estilos y lo que se necesite de este elemento en específico así:
prueba.style.color = "#FFFFFF"; //Cambiaría el color de la letra original del texto de ese elemento.
prueba.style.backgroundColor = "#000000"; //Cambiaría el color de fondo del elemento.
// Si hicieramos a esta altura un alert con el contenido(innerHTML) de "prueba" nos llamaría el valor actual, que al no haber sido modificado aún, sigue siendo el establecido en el HTML.
prueba.innerHTML =
    "Este texto reemplazará el contenido original que había en este contenedor llamado #idDePrueba en HTML";
// También podemos usar en una sola linea el siguiente comando y haría en esencia lo mismo, solo que no tendríamos el valor guardado en una variable, así que no lo podríamos reutilizar si necesitamos hacer algún otro cambio.
document.getElementById("idDePrueba").innerHTML =
    "Este texto reemplazará el contenido original que había en este contenedor llamado #idDePrueba en HTML";

//!-------------------------DIALOGOS---------------------------------
// Existen 3 principales maneras de generar dialogos en pantalla.

//!     ALERT
alert("Espero que tengas un buen día");
// Saldrá un cuadro de dialogo sobre el navegador con la frase "Espero que tengas un buen día"
var age = 32;
var message = "¿Confirmas que tienes " + age + " años?";
alert(message);
// Saldrá un mensaje con la frase: "Confirmas que tienes 32 años?"

//!     CONFIRM
var confirmation = confirm("¿Estas seguro de que quieres salir?");
// Saldrá un cuadro de dialogo con la frase "¿Estas seguro que quieres salir?" y dos botones con la opción OK (que será TRUE) y CANCEL (que será FALSE).
// Se pueden añadir diferentes lineas para que el código responda lo que el usuario responde.
if (confirmation) {
    document.write("Estamos saliendo de la aplicación...");
} else {
    document.write("¡Todavía estamos en la aplicación!");
}
// De esta manera, luego de que el usurario responde, el programa ejecuta la acción particular que incluyamos.

//!     PROMPT BOX
// Es similar a CONFIRM con la diferencia que le vamos a pedir información al usuario.
// El formato es el siguiente => var age = prompt(msg,defaulText)... (msg y defalutText se conocen como ARGUMENTOS)
var age = prompt("¿Cuantros años tienes?", "29");
// Aparecerá un mensaje en pantalla donde se solicita la edad y saldrá prerellenado con el numero 29, se pueden dejar las comillas vacias (msg,"") y el cuadro saldrá vacío
document.write("Nos has dicho que tienes " + age + " años, correcto?");
// De esta manera nos aparecerá una linea en pantalla en donde se indica la edad ingresada en el prompt llenado con anterioridad.
// Se pueden añadir opciones también:
if (age < 18) {
    document.write("No se permite la entrada a menores.");
} else {
    document.write("Eres mayor de edad, puedes pasar.");
}
// De esta manera se imprimiría en la página el texto deacuerdo a la condición que queramos.

//!-------------------------DOM---------------------------------
// El document es una es una variable muy importante de JavaScript, contiene el DOM (DOcument Object Model), que es como el navegador interpreta el HTML utilizado para renderizar la página. El navegador al leer su archivo HTML, crear una copia en memoria de aquel HTML y a partir de esa copia va diseñando la página. Esta copia es lo que llamamos DOM, siendo una representación en memoria del HTML. Por eso, cuando decimos que con JavaScript estamos manipulando el DOM, estamos alterando la representación en memoria de lo que el navegador interpretó.

//!     QUERY SELECTOR
// Para tomar valores de objetos en mi HTML, es necesario utilizar la propiedad document seguido de querySelector, lo que me permitirá modificar objetos llamandolos por sus etiquetas o por sus clases
//? Ej:
const title = document.querySelector("h1"); //por etiqueta
const title2 = document.querySelector(".body__main--title"); //por clase

//!     QUERY SELECTOR ALL
// Me crea un arreglo con todos los tags que tengan el querySelector que le paso.

//!     GET ELEMENT BY ID
// De esta manera podemos traer un archivo, directamente por su ID
//? Ej:
const title3 = document.getElementById("title"); //por ID
