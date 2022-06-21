/*Definimos la clase Producto con 3 atributos y 2 métodos*/
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    descuento() {
        let boleano;
        if (this.precio > 900) {
            boleano = true;
        } else {
            boleano = false;
        }
        return boleano;
    }
    precioFinal() {
        let precioF;
        if (this.precio > 900) {
            precioF = ((this.precio) * 0.1 + this.precio).toFixed(2)
        } else {
            precioF = ((this.precio) * 0.15 + this.precio).toFixed(2)
        }
        return parseFloat(precioF);
    }
}

/*Definimos un array para todos los productos de la tienda*/
const productosDeTienda = [];
/*Definimos un array de objetos que son los productos adquiridos por el cliente*/
const productos = [];

let canasta = [];

/*Función para llenar el arreglo productosDeTienda */
function productosDisponibles() {
    const ganadorA = new Producto(1, "Ganador A", 350);
    productosDeTienda.push(ganadorA);
    const ganadorB = new Producto(2, "Ganador B", 450);
    productosDeTienda.push(ganadorB);
    const ganadorC = new Producto(3, "Ganador C", 600);
    productosDeTienda.push(ganadorC);
    const proteinaA = new Producto(4, "Proteína A", 1100);
    productosDeTienda.push(proteinaA);
    const proteinaB = new Producto(5, "Proteína B", 1150);
    productosDeTienda.push(proteinaB);
    const proteinaC = new Producto(6, "Proteína C", 1400);
    productosDeTienda.push(proteinaC);
    const SnackA = new Producto(7, "Snack A", 150);
    productosDeTienda.push(SnackA);
    const SnackB = new Producto(8, "Snack B", 250)
    productosDeTienda.push(SnackB);;
    const SnackC = new Producto(9, "Snack C", 300);
    productosDeTienda.push(SnackC);
}

productosDisponibles();

const listadoProductos = document.getElementById("listadoProductos");
const listadoCarrito = document.getElementById("listadoCarrito");

/*Función para cargar productos y basada en lo visto en clase*/
function cargarProductos() {
    //debugger
    listadoProductos.innerHTML = "";
    for (const producto of productos) {
        const li = document.createElement("li");
        li.className = "collection-item blue-text"
        li.innerText = producto
        li.id = producto + "Prod"
        listadoCarrito.append(li);  /*Se pone en el nodo padre*/
    }
}
cargarProductos()

/*Función para crear la lista con todos los productos ingresados con la función agregarProducto()*/
function listarProductos() {
    //debugger   
    //El debugger lo comenté para que no detenga la ejecución;
    productosDeTienda.forEach((producto) => {
        const fila = `<tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.descuento()}</td>
        <td>${producto.precioFinal()}</td>
      </tr>`
        document.querySelector("tbody").innerHTML += fila;
        //Es para conectarnos a elementos HTML por cualquiera de sus elementos. Aquí fue con tbody
    })
}

/*Llama a l función de arriba*/
listarProductos();

/*Le asginamos la función de agregarProducto al botón del archivo HTML*/
document.getElementById("boton1").onclick = agregarProducto;
document.getElementById("boton2").onclick = eliminarProducto;


/*Las 3 funciones son para agregar elemento a la tabla. Los elementos son ingresados por el formulario*/

/*Función para agregar un producto*/
function agregarProducto() {
    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;
    canasta.push([generador(), producto, cantidad, precio]);
    hacerTabla();
}

/*Función para eliminar un producto*/
function eliminarProducto() {
    let excluido = document.getElementById("producto").value;
    canasta = canasta.filter((elemento) =>
        elemento.producto != excluido
    )
    //debugger
    console.table(canasta)
    hacerTabla();
}

/*Con esta función se agrega el producto a la tabla*/
function hacerTabla() {
    let tabla = "<thead><tr><th>Identificador</th><th>Producto</th><th>Cantidad</th><th>Precio</th></tr></thead><tbody>"
    for (let i = 0; i < canasta.length; i++) {
        tabla += `<tr><td>${canasta[i][0]}</td><td>${canasta[i][1]}</td><td>${canasta[i][2]}</td><td>${canasta[i][3]}</td></tr>`;
    }
    document.getElementById("factura").innerHTML = tabla;
}

/*Esta función crea un id para los productos*/
function generador() {
    return (Math.random() * 10).toFixed(0);
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
*/