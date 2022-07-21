//mostrarProductos(creatinasDisponibles)
const swa = (mensaje, bgColor, tiempo, icono, color) => {
    Swal.fire({
        icon: icono || '',
        title: mensaje,
        position: 'top-center',
        showConfirmButton: true,
        toast: true,
        timer: tiempo || 3000,
        timerProgressBar: true,
        background: bgColor || 'white',
        color: color || '#ffffff'
    })
}//Falta arreglar el Swal

const contenidoDOM = document.querySelector("#contenido");
const cargandoDOM = document.querySelector("#cargando");
const URL = `../js2/todos.json`

/*Este método lo quité porque necesito un botón. ¿Cómo lo podría poner?*/
const retornoCardContenido = (contenido) => {
    const {nombre, poster, marca, pais, id } = contenido
    return `
    <div class="card" style="width: 12rem;">
            <img class="responsive-img" width="100%" loading="lazy" src="${poster}" alt="" title="THE MARTIAN">
        <div class="card-body black">
            <h5 class="card-title">${nombre}</h5>
            <p class="yellow-text">Marca: <span class="white-text">${marca}</span></p>
            <p class="yellow-text">Pais: <span class="white-text">${pais}</span></p>
            <button class="btn btn-primary"${id}"> Comprar</button>
        </div>
        <br>
    </div>`
    
}

const retornoError = () => {
    return `<div class="center white-text">
    <br><br><br><br>
    <h4>El contenido no está disponible. Intente nuevamente en unos minutos.</h4>
    <br><br>
    <i class="large material-icons">sentiment_very_dissatisfied</i>
    <br><br>
</div>` 
} 

//Fetch le pide información al servidor y si todo está bien, el servidor manda 
//Response que se queda el fetch en formato JSON
//Todo JSON que devuelve un servidor es en formato String

const obtenerContenido = (URL) => {
    //let cardsAmostrar = ""
    const contenedorProductos = document.getElementById('creatinas-contenedor');
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            //console.table(data)
            for (let contenido of data) {
                const {nombre, precio, poster, marca, pais, id } = contenido
                if(contenido.categoria === "Creatina"){
                //cardsAmostrar += retornoCardContenido(contenido)
                const div = document.createElement('div');
                div.classList.add('card');
                //div.innerHTML += retornoCardContenido(contenido)
                div.innerHTML += `
                <div class="card center" style="width: 10rem;">
                        <img class="responsive-img" width="80%" loading="lazy" src="${poster}" alt="" title="THE MARTIAN">
                    <div class="card-body black">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="yellow-text">Precio: $<span class="white-text">${precio}</span></p>
                        <p class="yellow-text">Marca: <span class="white-text">${marca}</span></p>
                        <p class="yellow-text">Pais: <span class="white-text">${pais}</span></p>
                        <button id="boton${id}" class="btn btn-primary">Add <ion-icon name="cart"></ion-icon> </button>
                    </div>
                    <br>
                </div>`
                contenedorProductos.appendChild(div);
                const boton = document.getElementById(`boton${id}`);
                boton.addEventListener('click', () => { 
                    carritoIndex2(id);
                    guardarDatos2(contenido);
                    swa(`${nombre} agregado al carrito`, "DodgerBlue", 1000, 'success')
                })
            }
                swa(`Se han cargado los productos disponibles`, "DodgerBlue", 1000, 'success')
            }
            //contenidoDOM.innerHTML=cardsAmostrar
        })

        .catch((error)=> {
            contenidoDOM.innerHTML= retornoError() })
        .finally(()=>cargandoDOM.innerHTML="")
}

document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        obtenerContenido(URL)
    },2000)
})

/*Parte de Storage*/
function guardarDatos2(producto) {
    const datosProducto = {
        id: producto.id,
        nombre: producto.nombre
    }
    //swa(`Producto guardado en localStorage`, "DodgerBlue", 3000, 'success') 
    let str = JSON.stringify(datosProducto)
    localStorage.setItem("datosProduct", str)
}

let carritoCompras2 = [];

/*En un after hicieron este método en otro archivo.js pero a mí no me lo reconocía ni con export*/
const carritoIndex2 = (productoId) => {
    const contenedorCarrito = document.getElementById("carrito-contenedor")

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {

            const renderProductoCarrito = () => {
                let producto = data.find(producto => producto.id == productoId)
                carritoCompras2.push(producto);
                let div = document.createElement('div');
                div.classList.add('productoEnCarrito');
                div.innerHTML += `<p>${producto.nombre}</p>
                <p>Precio: ${producto.precio}</p>
                <button id="eliminar${producto.id}" class="btn btn-light boton-eliminar" type="button"><ion-icon name="trash"></ion-icon></button>`
                contenedorCarrito.appendChild(div)
                const boton = document.getElementById(`eliminar${producto.id}`);
                boton.addEventListener('click', () => {
                    contenedorCarrito.removeChild(div)
                    swa(`${producto.nombre} eliminado del carrito`, "DodgerBlue", 1000, 'success')
                })
                const botonFinalizarPedido = document.getElementById(`comprar`);
                botonFinalizarPedido.addEventListener('click', () => {
                    swa(`Llene el formulario para comprar`, "DodgerBlue", 1000, 'success')
            })
            }
            renderProductoCarrito()
        })
}