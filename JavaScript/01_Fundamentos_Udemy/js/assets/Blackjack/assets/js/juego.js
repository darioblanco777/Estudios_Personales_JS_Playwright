/**
 * 2C = two of clubs
 * 2D = two of diamonds
 * 2H = two of hearts
 * 2S = two of spades
 */ 

//console.warn("Alternativa Dario")
//
//let deck = [];
//const tipos =["C","H","S","D"]
//const crearDeck1 = ()=>{
// for (let i=2; i<=10; i++){
//for(let j =0; j < tipos.length; j++){
//    console.log(deck.push(i + tipos[j]))}
//}
//console.log("baraja",deck)
//}
//crearDeck1()
 //---------------------------------//--------------------------

console.warn("Alternativa DARIO")
let deck1 = [];
const tipos =["C","H","S","D"];
const Especiales =["A","J","Q","K"]

const crearDeck2 = ()=>{
for (let i=2; i<=10; i++){
    for(let tipo of tipos){
    (deck1.push(i + tipo));
}} 
for(let xpe of Especiales){for(let tipo of tipos){
    deck1.push(xpe + tipo);
    }
}
deck= _.shuffle (deck1);
console.log(deck)
}
crearDeck2();
//----------------------------------//--------------------
console.warn("Ejercicio realizado Dary")
deck= _.shuffle (deck1)
let numAzar = (Math.floor(Math.random()*deck.length));
let MazoDealer = deck.splice(numAzar,1);

const pedirCarta = () =>{
let carta = MazoDealer[0];
let valor = carta.substring(0, carta.length - 1);
console.log(valor)
if (isNaN(valor)){

    if (valor === "A") {
        return 11;
   }else
     return 10;
}
return valor * 1;
}
console.log(pedirCarta());

//-----------------------------------//----------------------
console.warn("Manipiulacion del DOM")
// document.querySelector(): devuelve el primer elemento del documento que coincida con el selector CSS.
// querySelector() → uno (el primer elemento).
//querySelectorAll() → todos los elementos que coincidan.

// document.querySelector(".titulo").innerHTML = "Dario"
'Dario' // Se modifico el DOM cambiando el nombre de Blackjack a Dario. 

