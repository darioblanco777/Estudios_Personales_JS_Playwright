// 🔦Los métodos son fuciones internas de los arreglos y 
// 🔦las propiedades son una especie de variable que tambien esta dentro de los arreglos.
let juegos = ["mario","zelda","coconut", "dragonball"];
console.log("longitud",juegos.length);

let primerGame = juegos[juegos.length -3];
let ultimoGame = juegos[juegos.length -1];
console.log ({primerGame,ultimoGame})


//const frutas = ["manzana", "pera", "uva"];
//frutas.forEach(fruta => {
//console.table(fruta);
//});
 
 juegos.forEach((elemento,indice,arr) =>{
    console.log("datos array",elemento,indice,arr)
 }) 

let nuevaLongitud = juegos.push("Biohazard");
console.log (nuevaLongitud);

// Si quiero anexar un nuevo elemento al arreglo utilizaremos Arrayname.unshift()
juegos.unshift("rayden");
juegos.forEach(element => {
    console.log(juegos)
});
//console.log(juegos[0]);

// Si quiero eliminar el último elemento utilizo Arrayname.pop ()
//let juegoBorrado = juegos.pop();
//let test = 2
//console.log(juegoBorrado,juegos.length -test )
//console.log(juegos)


// Si quiero eliminar cierto elemento del arreglo. ( No el primero ni el último)
let pos = 2;
console.log(juegos)
let nuevoJuegoarray = juegos.splice(pos,3)
console.log (nuevoJuegoarray)

// Si quiero saber cual es la exacta posición index de un elemento del Arreglo usamos:
let Biohazardindex = juegos.indexOf("Biohazard");
console.log(Biohazardindex)