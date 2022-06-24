/*Con el siguiente código se elige el o los productos que necesita 
un cliente (Ganadores de masa/proteínas/snacks)
y el tipo del o los productos (A, B o C): */

/*Con las siguientes líneas ingresamos los datos del usuario: */
let nombre = prompt("Ingresa tu nombre: ");
let apellido = prompt("Ingresa tu apellido: ");

let titulo = document.getElementById("titulo");
console.log(titulo.innerText);

/*Definimos 4 variables para cada opción de los menús (Productos y tipos)*/
let opcion;
let respuesta;
let opcion2;
let respuesta2;
/*Definimos una variable para el precio total a pagar*/
let precioT = 0;

/*Definimos la clase producto, con la que crearemos los objetos comprados*/
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

/*Definimos un array para todos los productos de la tienda*/
const productosDeTienda = [];
/*Definimos un array de objetos que son los productos adquiridos por el cliente*/
const productos = [];

/*Función para llenar artículos*/
function productosDisponibles() {
    const ganadorA = new Producto("Ganador A", 350);
    productosDeTienda.push(ganadorA);
    const ganadorB = new Producto("Ganador B", 450);
    productosDeTienda.push(ganadorB);
    const ganadorC = new Producto("Ganador C", 600);
    productosDeTienda.push(ganadorC);
    const proteinaA = new Producto("Proteína A", 1100);
    productosDeTienda.push(proteinaA);
    const proteinaB = new Producto("Proteína B", 1150);
    productosDeTienda.push(proteinaB);
    const proteinaC = new Producto("Proteína C", 1400);
    productosDeTienda.push(proteinaC);
    const SnackA = new Producto("Snack A", 150);
    productosDeTienda.push(SnackA);
    const SnackB = new Producto("Snack B", 250)
    productosDeTienda.push(SnackB);;
    const SnackC = new Producto("Snack C", 300);
    productosDeTienda.push(SnackC);
}

/*En el siguiente doble do-while se elige el producto que el cliente necesita mientras elija una opción válida*/
do {
    do {
        opcion = parseInt(prompt("¿Qué tipo de productos necesita?\nIngresa 1 para ganadores de masa.\nIngresa 2 para proteínas\nIngresa 3 para snacks." +
            "\nIngresa 4 para ver todos los productos disponibles\nIngresa 5 para ver productos de un precio específico\nIngresa 6 para ver los productos elegidos" +
            "\nIngresa 7 para buscar el producto más caro\nIngresa 8 para encontrar un producto por su nombre\nIngresa otro número para salir"));
    } while (opcion < 0 && option > 8);

    switch (opcion) {
        case 1:
            console.log(`${nombre} ${apellido}!, ha elegido ganadores de masa.`);
            elegirGa();
            break;
        case 2:
            console.log(`${nombre} ${apellido}!, ha elegido proteínas.`);
            elegirPr();
            break;
        case 3:
            console.log(`${nombre} ${apellido}!, ha elegido snacks.`);
            elegirSn();
            break;
        case 4:
            console.log(`${nombre} ${apellido}!, ha elegido mostrar todos los productos de la tienda.`);
            productosDisponibles();
            mostrarProductos();
            productosDeTienda.length=0;
            break;
        case 5:
            console.log(`${nombre} ${apellido}!, ha elegido mostrar productos de un precio específico.`);
            productosDisponibles();
            precioPropuesto = parseInt(prompt("Ingresa el precio de referencia:"));
            buscarProductoPorPrecio(precioPropuesto)
            productosDeTienda.length=0;
            break;
        case 6:
            console.log(`${nombre} ${apellido}!, ha elegido mostrar los productos elegidos por el cliente.`);
            productosElegidos();
            break;
        case 7:
            console.log(`${nombre} ${apellido}!, ha elegido mostrar el producto más caro.`);
            productosDisponibles();
            nombrePropuesto = prompt("¿Qué precio propones?");
            productoMasCaro(nombrePropuesto);
            productosDeTienda.length=0;
            break;
        case 8:
            console.log(`${nombre} ${apellido}!, ha elegido mostrar producto por un nombre específico.`);
            productosDisponibles();
            nombrePropuesto = prompt("Ingresa el nombre del producto que quieres ");
            productoPorNombre(nombrePropuesto);
            break;
        default:
            console.log(`${nombre} ${apellido}!, ha elegido salir.`);
            break
    }
    respuesta = prompt("¿Desea adquirir productos de otra categoría? \n- Sí (Introduce S o s)\n- No (Introduce otro caracter)`");
} while (respuesta == 's' || respuesta == 'S')

/*En todas las funciones se crean objetos /

/*Función para elegir Ganadores de masa (Derivado de líneas 15 y 20)*/
function elegirGa() {
    do {
        do {
            opcion2 = parseInt(prompt("¿Qué ganador necesita?\nGanador A - $350 (Introduce 1)\nGanador B - $450 (Introduce 2)\nGanador C - $600 (Introduce 3)\n"));
        } while (opcion2 < 0 && option2 > 3);

        switch (opcion2) {
            case 1:
                console.log(`${nombre} ${apellido}!, ha elegido GA ($350).`);
                precioT += 350;
                const ganadorA = new Producto("Ganador A", 350);
                productos.push(ganadorA);
                break;
            case 2:
                console.log(`${nombre} ${apellido}!, ha elegido GB ($450)..`);
                precioT += 450;
                const ganadorB = new Producto("Ganador B", 450);
                productos.push(ganadorB);
                break;
            case 3:
                console.log(`${nombre} ${apellido}!, ha elegido GC ($600).`);
                precioT += 600;
                const ganadorC = new Producto("Ganador A", 600);
                productos.push(ganadorC);
                break;
        }
        respuesta2 = prompt(`${nombre} ${apellido}, ¿Desea elegir otro producto de esta categoría? \n- Sí (Introduce S o s)\n- No (Introduce otro caracter)`);
    } while (respuesta2 == 's' || respuesta2 == 'S')
    console.log(`${nombre} ${apellido}, pagará un total de $${precioT}`);
}

/*Función para elegir Proteínas (Derivado de líneas 15 y 24)*/
function elegirPr() {
    do {
        do {
            opcion2 = parseInt(prompt("¿Qué proteína necesita?\nProteína A - $1100 (Introduce 1)\nProteína B - $1150 (Introduce 2)\nProteína C - $1400 (Introduce 3)\n"));
        } while (opcion2 < 0 && option2 > 3);

        switch (opcion2) {
            case 1:
                console.log(`${nombre} ${apellido}!, ha elegido PA ($1100).`);
                precioT += 1100;
                const proteinaA = new Producto("Proteína A", 1100);
                productos.push(proteinaA);
                break;
            case 2:
                console.log(`${nombre} ${apellido}!, ha elegido PB ($1150).`);
                precioT += 1150;
                const proteinaB = new Producto("Proteína B", 1150);
                productos.push(proteinaB);
                break;
            case 3:
                console.log(`${nombre} ${apellido}!, ha elegido PC ($1400).`);
                precioT += 1400;
                const proteinaC = new Producto("Proteína C", 1400);
                productos.push(proteinaC);
                break;
        }
        respuesta2 = prompt(`${nombre} ${apellido}, ¿Desea elegir otro producto de esta categoría? \n- Sí (Introduce S o s)\n- No (Introduce otro caracter)`);
    } while (respuesta2 == 's' || respuesta2 == 'S')
    console.log(`${nombre} ${apellido}, pagará un total de $${precioT}`);
}

/*Función para elegir Snacks (Derivado de líneas 15 y 28)*/
function elegirSn() {
    do {
        do {
            opcion2 = parseInt(prompt("¿Qué snacks necesita?\nSnacks A - $150 (Introduce 1)\nSnacks B - $250 (Introduce 2)\nSnacks C - $300 (Introduce 3)\n"));
        } while (opcion2 < 0 && option2 > 3);

        switch (opcion2) {
            case 1:
                console.log(`${nombre} ${apellido}!, ha elegido SA ($150).`);
                precioT += 150;
                const SnackA = new Producto("Snack A", 150);
                productosDeTienda.push(SnackA);
                productos.push(SnackA);
                break;
            case 2:
                console.log(`${nombre} ${apellido}!, ha elegido SB ($250).`);
                precioT += 250;
                const SnackB = new Producto("Snack B", 250);
                productosDeTienda.push(SnackB);
                productos.push(SnackB);
                break;
            case 3:
                console.log(`${nombre} ${apellido}!, ha elegido SC ($300).`);
                precioT += 300;
                const SnackC = new Producto("Snack C", 300);
                productosDeTienda.push(SnackC);
                productos.push(SnackC);
                break;
        }
        respuesta2 = prompt(`${nombre} ${apellido}, ¿Desea elegir otro producto de esta categoría? \n- Sí (Introduce S o s)\n- No (Introduce otro caracter)`);
    } while (respuesta2 == 's' || respuesta2 == 'S')
    console.log(`${nombre} ${apellido}, pagará un total de $${precioT}`);
}

/*Método para mostrar todos los productos disponibles en la tienda - (Opción 4)*/
function mostrarProductos() {
    console.log("Los productos disponibles en la tienda son los siguientes:");
    for (const producto of productosDeTienda) {
        console.log(producto);
    };
}

/*Con este método se imprimen productos que coincidan en precio con el producto ingresado (Opción 5)*/
function buscarProductoPorPrecio(precioPropuesto) {
    const preciosIguales = [];
    for (let index = 0; index < productosDeTienda.length; index++) {
        if (productosDeTienda[index].precio === precioPropuesto) {
            preciosIguales.push(productosDeTienda[index]);
        }
    };
    console.log("El producto encontrado con ese precio es: ");
    preciosIguales.forEach(element => console.log(element));
}

/*Método para mostrar todos los productos elegidos por el cliente (Opción 6)*/
function productosElegidos() {
    console.log("El cliente ha adquirido los siguientes productos:");
    for (const producto of productos) {
        console.log(producto);
    };
}

/* Este método es para encontar productos de mayor precio (Opción 7)*/
function productoMasCaro(precioPropuesto) {
    let articulosMayoresAPrecio = productosDeTienda.filter(producto => producto.precio > precioPropuesto)
    console.log("Los articulos con un precio mayor a $" + precioPropuesto + " son:");
    console.table(articulosMayoresAPrecio);
}

/*Este método es para encontrar un producto por su nombre (Opción 8)*/
function productoPorNombre(nombrePropuesto) {
    let productoSeleccionado = productosDeTienda.find(producto => producto.nombre == nombrePropuesto);
    console.log("Detalles del artículo:");
    console.table(productoSeleccionado)
}

/*
Comentario 1: Me llamó la atención el harcode línea 36
Duda 1: ¿Cómo puedo quitar el hardcode de la líneas 31 a 50?
Duda 2: ¿Cómo puedo cambiar el mensaje que sale a partir de la elección de las opciones 4 ...?
Duda 3: ¿Cómo pongo el método de la línea 219 resumido?
Duda 4: No se ve el archivo de CSS, pero lo vi en el código, ¿No lo pusiste por irrelevante? Sí estaba
Duda 5: ¿Por qué no me reconoce la propiedad center de CSS?
Duda 6: ¿Es buena mi idea de los carritos? Sí
Duda 7: ¿Asume el tipo de valor true/false? Tiene que ver con línea 8
Duda 8: ¿Por qué no me toma el color? No funciona 
Duda 9: ¿Cómo rellenaríamos desde 81 si fueran objetos muy grandes(con muchas propiedades)?
Duda 10: ¿Sería mala práctica poner los eventos en el archivo HTML? Sí
Duda 11: ¿Cuál es la función anónima? 28:14 Clase 15/06s
Duda 13: ¿Cómo pongo mi referencia a JS? Puede ser abajo o arriba con defer
Duda 14: ¿Cómo elimino objetos? En eso ando.
Duda 15: ¿Dónde encuentro los mejores trabajos? 

Duda 1: ¿Cómo puedo quitar el hardcode de la líneas 31 a 50? 
En este punto lo que correspondería sería cargar la información de una fuente de datos 
(base de datos, servicio u otro medio). Posiblemente pudiéramos fragmentar el código para 
tener varios archivos y hacer más legible la rutina, pero difícilmente podríamos retirar 
el hardcode sin una fuente de datos a la cual recurrir.

Duda 2: ¿Cómo puedo cambiar el mensaje que sale a partir de la elección de las opciones 4 ...? 
Quizás podamos mostrar información manipulando el DOM. Podríamos escribir todo en una división 
o utilizar algún componente de Bootstrap. Lo platicamos.

Duda 3: ¿Cómo pongo el método de la línea 219 resumido? Podríamos cambiar ese FOR que recorre
índices por un FILTER. Sin embargo, lo que haces es adecuado y funciona. No es que uno sea mejor
o peor, todo depende del gusto del desarrollador. Si lo hiciera desde 0, posiblemente elegiría un 
FILTER ya que considero es más rápido de programar, pero si te gusta más un FOR a la medida, adelante.
*/
