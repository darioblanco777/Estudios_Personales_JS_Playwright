 console.warn("Operador_Condicional_terniario")
let boys = 5;
console.log ("look",`yo tengo ${boys} hijitos`) 
// las comillas tipo Backtick, me permiten concatenar sin tener que colocar el simbolo aritmetico "+", ejp let boys = 5.
//en los array [],se tiene un método para indicar o preguntar si algo existe dentro de ese arreglo. 
// asi : array.name[a,b,c,d,e]includes(a). De este modo le pregunto si este arreglo contiene la letra a.

const tieneMembresia = (miembroVip)=> miembroVip ? "2usd" :"10 usd" 
console.log("PAGO",tieneMembresia(true)) 

const numeroMayor = (a,b)=> (a>b) ? a : b
console.log(numeroMayor(40,20))
// de este modo estamos evitando utilizar un return. 
// Practicamente un operador terniario se ve asi : const ejemplo = (Parametro)=> (parametro)? a: b;
//                                                 console.log (ejemplo(parametros ejp 5,3))                                     


const verPeliFinal = false
const sagaCompleta = [
"toystory1","toystory2","toystory3","toystory4",
verPeliFinal ? "toystory5" : "alien1",
tieneMembresia(),
(()=>"Aventuras en pañales")(),
]
console.log("plancine",sagaCompleta)
//--------------------------------TIPS ADICIONALES------------------------
console.warn("USOS ADICIONLAES OPERADOR TERNARIO")

const x = 10;

const resultadoFinal = x >= 9 ? "Excelente":
                       x >= 7 ? " Bueno":
                       x >= 5 ?  "Regular":
                       x < 5  ? "Reprobado":"No presento examen";
                       
console.log({x,resultadoFinal}) // por alguna extraña razon tuve que dar un enter entre las dos variables ( Jamas me habia pasado eso)
