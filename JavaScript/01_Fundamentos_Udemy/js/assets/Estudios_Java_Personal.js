//Estudios personales de Java_Script//
//console.log("HOLA MUNDO"); Un metodo es una funcion dentro de un objeto.
// "Git bash" : Bourne Again Shell, aplicación diseñada para sistemas operativos Windows que proporciona una capa de emulación para trabajar con Git y Bash en un entorno de línea de comandos
// "Node" es un entorno de navegacion que nos permite correr Java Script fuera del navegador. Asíncrono y no bloqueante: Puede procesar miles de solicitudes de forma simultánea sin quedarse esperando a que una tarea pesada termine, lo que lo hace muy eficiente y escalable.
// "UTF-8" (Unicode Transformation Format - 8 bits) es el formato de codificación de caracteres más utilizado en la informática y en internet. 
// Crear rapido estructura HTML"Comando" !+Tab, dentro de este aparecera la etiqueta <script> el cual se usa para incluir o ejecutar código JavaScript dentro de una página web.
// Como practic
// Es buena práctica dejar los archivos de js en el Body y no en el head del HTML, porque esto puede evitar que se renderice correctamente los archivos.
// "Renderizar" es el proceso mediante el cual una computadora procesa datos o instrucciones (como código, modelos matemáticos o capas de edición) para convertirlos en una imagen, video o página web visualmente completa.
// Variable: contenedor de informacion en memoria que puede en el tiempo cambiar de valor. 
// Cuando creamos una variable, la podemos dejas asi: a =10; b= 23 ; y funciona pero es mala práctica. debe llevar let o Var, esto por debido a la implementacion del ECMA_SCRIPT_5 en el 2015. estas nuevas funciones son mas compatibles a todos los navegadores.
// "Polyfill" Es un código, que provee el funcionamiento de una nueva caracteristica de (Ecma_Script_6"ES6" @ Versiones más viejas como ES5).
// Poder imprimir en consola es muy valioso porque nos permite conocer el status de una variable let x = 4, en determinado punto. 
                    //Ejm :     console.log / console.warn / console.error......entre otros.
// Cuando veamos unos parenytesis en JS es una función o un método, sin embargo recordemos que un método es una función dentro de un objeto.EJP: 
// Ejemplo : (Console= objeto) (.log = método.). Los arrelos van el llaves cuadradas [], los objetos con corchetes {}.



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
// Test Git Hub