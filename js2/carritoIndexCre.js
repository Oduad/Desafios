import {creatinasDisponibles} from './creatinasDisponibles.js'

let carritoCompras = [];

const carritoIndex = (productoId) => {
    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductoCarrito = () => {
        let producto = creatinasDisponibles.find(producto => producto.id == productoId)
        carritoCompras.push(producto);

        let div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML += `<p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <button id="eliminar${producto.id}" class="boton-eliminar">Eliminar<i class="fa-solid fa-trash-can"></i></button>`

        contenedorCarrito.appendChild(div)
    }
    renderProductoCarrito()
}

export {carritoIndex}