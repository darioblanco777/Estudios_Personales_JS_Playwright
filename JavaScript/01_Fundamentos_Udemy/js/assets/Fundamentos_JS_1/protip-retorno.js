//function crearPersona (nombre,apellido) {
//return {nombre,
//        apellido
//}}
//const usuario = crearPersona("Dario","Bernal")
//console.log(usuario)

// Ahora funcion Flecha :
const usuario2 = (nombre,apellido)=> { return {nombre, apellido}}
console.log(usuario2("Dario","Bernal"))


// Inclusive sin la funcion de flecha solo tiene un return, podemos obviar el return y los corchetes.
const usuario3 = (edad,carrera)=>({edad,carrera})
console.log(usuario3(41,"Ingeniero"))
// Pro Tip Adicional 
function imprimeArgumentos (){
    console.log(arguments)
}
console.log([10,100,1210,1541]) // Me lo coivierte en arreglo
// Es posible hacerlo con funcion flecha
const numerosAzar = (casado,...argumts)=>{console.log("casado",casado,argumts)}
numerosAzar(true,100,200,2002,4546)

// este parámetro de los tres puntos es llamado REST, y debe ser el ultimo dentro del parentesis.

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
