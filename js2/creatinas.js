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
        color: color || 'black'
    })
}//Falta arreglar el Swal    

export{swa}

const contenidoDOM = document.querySelector("#contenido");
const cargandoDOM = document.querySelector("#cargando");
const URL = `../js2/todos.json`

const retornoError = () => {
    return `<div class="center white-text">
    <br><br><br><br>
    <h4>El contenido no está disponible. Intente nuevamente en unos minutos.</h4>
    <br><br>
    <i class="large material-icons">sentiment_very_dissatisfied</i>
    <br><br>
</div>` 
} 

let pagoTotal = 0;

const obtenerContenido = (URL) => {
    const contenedorProductos = document.getElementById("creatinas-contenedor");
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            for (let contenido of data) {
                const {nombre, precio, poster, marca, pais, id } = contenido
                if(contenido.categoria === "Creatina"){
                const div = document.createElement('div');
                div.classList.add('card');
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

                const pagoF = document.getElementById('totalP');
                const boton = document.getElementById(`boton${id}`);
                boton.addEventListener('click', () => {                 
                    let pago = Number(precio);  
                    pagoTotal += pago;
                    pagoF.value = "$"+pagoTotal;
                    carritoIndex2(id);
                    guardarDatos2(contenido);
                    swa(`${nombre} agregado al carrito y llevas $${pagoTotal}. &#128077;`, "DodgerBlue", 1000, 'success')
                })
            }
                swa(`Se han cargado los productos disponibles. &#128526;`, "DodgerBlue", 1000, 'success')
            }
        })

        .catch((error)=> {
            contenidoDOM.innerHTML= retornoError() })
        .finally(()=>cargandoDOM.innerHTML="")
}

document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        obtenerContenido(URL)
    },500)
})

/*Parte de Storage*/
function guardarDatos2(producto) {
    const datosProducto = {
        id: producto.id,
        precio: producto.precio,
        nombre: producto.nombre
    }
    let str = JSON.stringify(datosProducto)
    localStorage.setItem("datosProduct", str)
}

let carritoCompras2 = [];

const carritoIndex2 = (productoId) => {
    const contenedorCarrito = document.getElementById("carrito-contenedor")
    const pagoT = document.getElementById("total")

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {

            const renderProductoCarrito = () => {
                let producto = data.find(producto => producto.id == productoId)
                carritoCompras2.push(producto);

                let div = document.createElement('div');
                div.classList.add('productoEnCarrito');
                div.innerHTML += `<p>${producto.nombre}</p>
                <p>Precio: $${producto.precio}</p>
                <button id="eliminar${producto.id}" class="btn btn-light boton-eliminar" type="button"><ion-icon name="trash"></ion-icon></button>`
                contenedorCarrito.appendChild(div)

                const boton = document.getElementById(`eliminar${producto.id}`);
                const pagoF = document.getElementById('totalP');
                boton.addEventListener('click', () => {
                    contenedorCarrito.removeChild(div)
                    let pago = Number(producto.precio);  
                    pagoTotal -= pago;
                    pagoF.value = "$"+pagoTotal;
                    swa(`${producto.nombre} eliminado del carrito. &#128077;`, "DodgerBlue", 1000, 'success')
                })
                const botonFinalizarPedido = document.getElementById(`comprar`);
                botonFinalizarPedido.addEventListener('click', () => {
                    swa(`Llene el formulario para comprar. &#9998;`, "DodgerBlue", 1000, 'success')
            })
            }
            renderProductoCarrito()
        })
}
