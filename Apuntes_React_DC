//React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Creado por el equipo de desarrollo de Facebook
// React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo.
// Se divide en componentes encapsulados que manejan sus propios estados par aconvertirse en interfaces de usuario más complejas.

//!--------------INSTALAR EL ENTORNO DE REACT
// Por ser una librería, es necesario instalar los componentes que vamos a usar (crear un entorno de desarrollo) y para eso, utilizamos el comando en terminal:

//* npx create-react-app my-app
// En este caso, my-app será el nombre de la aplicación o proyecto.
//<./ para usar la carpeta actual>
// En la primera línea npx no es un error de escritura: Es una herramienta de ejecución de paquetes que viene con npm 5.2+.

// Con esto nos quedan instalados los archivos que va a usar React mientras lo usemos

// Para abrir el live server:
//* cd my-app
// Para entrar en la carpeta si estamos fuera y:
//* npm start

//!--------------ELEMENTOS
//Los elementos son los bloques más pequeños de las aplicaciones de React.

//* SINTAXIS
const element = <h1 className="test">Hello, world</h1>;
// Realmente los elementos tienen esa sintaxis para facilitar su comprensión PERO realmente son "abreviaturas" de:
React.createElement("div", { class: "test" }, "Hello, world");
// Aunque la sintaxis es similar, es necesario recordar que los elementos //!NO SON ETIQUETAS DE HTML

// Los elementos son los que constituyen los componentes. Los elementos de React son inmutables. Una vez creas un elemento, no puedes cambiar sus hijos o atributos. Un elemento es como un fotograma solitario en una película: este representa la interfaz de usuario en cierto punto en el tiempo.

//* ATRIBUTES
//Son las partes de los elementos que definen sus propios atributos, como si de atributos de HTML se tratara.
//? Ej:
const ejemplo = <h1 className="test">Hello, world</h1>;
// En este caso, className es un atributo que indica la clase del elemento. En HTML usamos class, pero en ReactJS class es una palabra reservada para otro tipo de elementos, por lo tanto se usa className. El resto de atributos de HTML, por lo menos la mayoría, son iguales.

//!--------------COMPONENTS
//Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada. Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y retornan elementos de React que describen lo que debe aparecer en la pantalla.
//* Los componentes son INVISIBLES para HTML, por tal motivo no aparecen en el inspector del navegador.

// Cuando incluimos varios componentes en un mismo documento, todos estos deben ir en una misma "etiqueta de HTML" como por ejemplo un <div></div> o lo que sería una mejor práctica:
//?Ej:
return <React.Fragment>...</React.Fragment>;

//Cabe recordar que los componentes son funciones de Javascript, por tal motivo su inicialización debe ser como tal:
function App() {
    //* Aqúi va el return( ) y dentro de este el contenedor padre que alojará todo el código de REACT!
}

//!--------------PROPS / PROPERTIES
// Los componentes pueden tener "parámetros", solo que en React se conocen como "Properties" y se definen como "props". Estas se pueden usar de muchas maneras y se definene en el lugar en el que el componente es renderizado.
//? Ej:
ReactDOM.render(
    <App saludo="Oliwi" dinero="300">
        {/* Esta es una manera de definir props para el componente App. Dentro del mismo "tag" como si de atributos se tratara*/}
        Buenaaaaaas
        {/* Esta es otra manera de definir props. Se debe crear una etiqueta de cierre y en el interior del componente se pasa la prop. En este caso,  */}
    </App>
);

//!--------------ATOMIC DESIGN
// El concepto de Atomic Web Design surge del libro Atomic Design de Brad Frost, publicado por primera vez en 2013. Sus teorías se han convertido en un referente para la creación de los sistemas de diseño. Brad Frost concibe el diseño de la interfaz web como un todo compuesto de unidades más pequeñas, que él llama átomos. Reutilizando y combinando estos componentes se generan elementos mayores, que son partes del diseño de un producto digital.

//* ATOMOS
// Los átomos son la unidad básica en “Atomic Design”, no pueden ser divididos en otras unidades, y componen los bloques más elementales de una interfaz de usuario. Ejemplos de átomos son iconos, el titular de una página, un botón o la imagen principal de un post. A nivel de código comprenden etiquetas HTML como las propias de los encabezados, imágenes, párrafos, botones, etiquetas de formularios o tablas. Pero un átomo carece de significado si no forma parte de un sistema mayor.

//* MOLÉCULAS
// Las moléculas son agrupaciones de átomos que, unidos, adquieren nuevas características y funcionan como una unidad. Forman componentes de interfaz relativamente simples, como un menú, una tabla o un formulario de búsqueda. A través de la reutilización de las moléculas, allí donde se necesiten, eliminamos complejidad, facilitamos el testado y aseguramos la coherencia gráfica, estructural y conceptual de la interfaz.

//* ORGANISMOS
// Los organismos son conjuntos de moléculas y átomos que crean elementos más complejos de una interfaz. Por ejemplo, una cabecera contiene moléculas y átomos, como un logotipo, la navegación principal y de su sección, la selección del idioma o un formulario de búsqueda. Organismos son elementos reutilizados asiduamente como cabeceras y pies, un menú completo de navegación o un listado de elementos.

//* PLANTILLAS
// Las plantillas son el último nivel de abstracción del sistema. En ellas se disponen los diversos componentes que hemos visto de forma jerarquizada para conformar una estructura de contenidos determinada.

//* PÁGINAS
// Las páginas son instancias específicas de las plantillas, creadas aplicando contenidos reales. En las páginas todos los componentes se conjuntan para crear un efectivo producto digital.

// //2 tipos de componentes... basados en clases= palabra reservada class. 2) Functional component, se declaran con una función normal o una arrow function.
// // Stateless y statefull

//!--------------ESTADOS
// Es un objeto que guarda la información de componentes.
//!PROPS
// vARIABLES QUE VIENEN DE UN COMPONENTE PADRE.
// deben ser de solo lectura e inmutables
// se usan para comunica entre componentes
// pueden ser accedidos por los hijos de los componentes
//!STATE
// variables directamente inicializadas y manejado en el componente.
// Los estados son mutables y pueden ser asincronos
// guarda informacion acerca del componente.
// se usa para generar comportamiento dinamico
//!EVENTOS
// Los eventos son similares a los eventos HTML, su principal
