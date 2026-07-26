//const { version } = require("react");
//
//let a = -15;
//if(a>10){
//    console.log("a es mayor a 10")
//    }
//else {(console.log("Numero negativo"))
//    console.log("fin del programa")
//    //prompt ("estas de acuerdo ?" )
//}


// Hay algunos constructores con los que se pueden crear objetos (date)
//const today1 = new Date()
//console.log(today)
// El siguiente es un objeto literal    
//let persona = {
//  nombre: "Dario",
//  apellido: "White"
//};

// Ejemplo: tambien podemos acceder de este modo
//const hoy = new Date();
//let dia = hoy.getDay(); //0 Domingo, 1 lunes ,2 martes , 3 miercoles .....
//console.log(dia)
//
//if (dia === "2" ){console.log("martes")}
//else{(console.log ("No es martes"))} // un solo (=) es asignación. No regresa un boolenano. 

// LABORATORIO
let semana= {
    domingo: 0,
    lunes :1,
    martes :2,
    miercoles :3,
    jueves :4,
    viernes:5,
    shabat :6
}
let x = new Date();
let today = x.getDay();
console.log(today)

let Verificardia = () => {
    (semana.domingo === today) && console.log("Hoy es domingo");
    (semana.lunes === today) && console.log("Hoy es lunes");
    (semana.martes === today) && console.log("Hoy es martes");
    (semana.miercoles === today) && console.log("Hoy es miércoles");
    (semana.jueves === today) && console.log("Hoy es jueves");
    (semana.viernes === today) && console.log("Hoy es viernes");
    (semana.shabat === today) && console.log("Hoy es shabat");
};
Verificardia();
 