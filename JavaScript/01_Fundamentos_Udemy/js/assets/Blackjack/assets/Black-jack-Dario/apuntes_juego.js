console.warn("Manipiulacion del DOM")
// document.querySelector(): devuelve el primer elemento del documento que coincida con el selector CSS.
// querySelector() → uno (el primer elemento).
//querySelectorAll() → todos los elementos que coincidan.

// document.querySelector(".titulo").innerHTML = "Dario"
'Dario' // Se modifico el DOM cambiando el nombre de Blackjack a Dario. 
document.querySelector("1 er Elemento")// es una de las funciones más iportantes de JavaScript. Sirve para buscar y seleccionar un elemento del HTML para poder leerlo o modificarlo.
document.querySelector("todas las coincidencias")
document.querySelector("large").innerText = "Rosa" // modificamos elementos tipo texto.
document.querySelector("large").innerHTML = "R" // modificamos elementos tipo texto.
document.querySelector("large").innerText = "<a>Hola mundo</a>" // No sirve adecuadamente , para ello es mejor el innerHTML.
document.querySelector("large").innerHTML = "<a>Hola mundo</a>" // Si modifica correctamente el elemento HTML del DOM.
document.getElementById('Computadora-cartas') // Efectivamente lo encuentra asi. Si quisieramos usar ese id, pero com query selector debemos realizarlo asi:
document.querySelector('#Computadora-cartas') // Efectivamente lo encuentra , pero debemos agregar el #. de igual modo para Clases : Usaremos ".Computadora-cartas"
document.querySelectorAll('.cartas-diseño') // Seleccione varias cartas de una baraja por su Clase.

//--------------------///\\\\------------------\\
document.createElement("button") // Asi podemos crear elementos dentro del DOM. 
// Luego de crear el boton, u guardarlo en una constante asi :const botonloco = document.createElement('button'), procedemos a añadirlo al DOM usando el id de la seccion Botones 
// id : divBotones para este caso. Finalmente lo añadimos con divBotones.append(botonloco).
// Agregar al boton clases usar : botonloco.classList.add('btn') " classlist.add"
console.log ("ejemplo")
const inputcasual = document.createElement('input')
divBotones.append(inputcasual) // la anexe al body del html o a cualquier seccion del DOM
inputcasual.placeholder = "hola mundo " 
inputcasual.classList.add ('form-control') // puedo hacerle modificaciones con base en la clase ( boostrap/ website de terceros)


// Callback : ES una función que hace el papel de argumento dentro de otra función.
// confirmar que un arreglo es un arreglo : console.log(Array.isArray(MazoDealer));
// Como insertar código dinamicamente : Backticks `lalalalalla` ejp : variable dinámica
console.warn(setTimeout)// en JavaScript sirve para ejecutar una función después de que haya pasado determinado tiempo.
setTimeout(() => {
    // código que quieres ejecutar
}, tiempo);
//El tiempo se expresa en milisegundos.
//1000 = 1 segundo
//2000 = 2 segundos
//5000 = 5 segundos
// FINALIZAMOS EL JUEGO 