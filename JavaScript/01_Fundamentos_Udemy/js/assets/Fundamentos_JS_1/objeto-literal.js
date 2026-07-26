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
delete personaje.apellido;
console.log(personaje)

// Si quiero anexar una nueva propiedad al objeto literal usaremos:
//nameArray.nuevaPropiedad ejp personaje.salario = 1000
personaje.salario = 1000;
personaje.genero = "masculino";
personaje.vehiculo = "Mercedes Benz AMG"
console.log(personaje)

// Que tal si no quiero que las propiedades se puedad modificar, en tal caso usaremos: Object.freeze(personaje);
Object.freeze(personaje)
// luego anexaré dos propiedades y mirares si las deja incluir. 
personaje.vehiculo = "Audi Q5";
console.log(personaje)
// rta : Como podemos ver no se dejo modificar el vehiculo, el unico defecto es que solo aplica para propiedades directas, pero si hay un objeto anidado , esas propiedades si se dejan cambiar :0.
vehiculo
: 
"Mercedes Benz AMG"

// Dejara cambiar propiedades anidadas ? miremos: 
personaje.hobbies[1]="Manga";
console.log(personaje)
// Definitivamente Object.freeze no congela propiedades anidadas.
// Quieres todas las propiedades de  mi objecto ? aqui vamos 
const propiedadesArreglo = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(valores)
// URL DE GRAN VALOR/ CONOCIMIENTO https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object