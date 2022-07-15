import {proteinasDisponibles} from './proteinasDisponibles.js'

let carritoCompras = [];

const carritoIndex = (productoId) => {
    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductoCarrito = () => {
        let producto = proteinasDisponibles.find(producto => producto.id == productoId)
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


/*let carritoCompras2 = [];
const URL2 = `../js/todos.json`

const carritoIndex2 = (productoId) => {
    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductoCarrito = () => {
        let producto = URL2.find(producto => producto.id == productoId)
        carritoCompras2.push(producto);

        let div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML += `<p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <button id="eliminar${producto.id}" class="boton-eliminar">Eliminar<i class="fa-solid fa-trash-can"></i></button>`

        contenedorCarrito.appendChild(div)
    }
    renderProductoCarrito()
}

export {carritoIndex2}*/