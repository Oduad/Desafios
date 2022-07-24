//const modalContenedor = document.getElementById('modal_container');
const modalContenedor = document.querySelector('.modal-container');
const modalContenedor2 = document.querySelector('.modal-container2');
const abrirModal1 = document.getElementById('galeriaCF')
const abrirModal2 = document.getElementById('galeriaWL')

const cerrarCarrito = document.getElementById('cerrar')

/*const mostrar = () => {
    const contenedorCarrito = document.getElementById("carrito-contenedor")

            const renderProductoCarrito = () => {
                let producto = data.find(producto => producto.id == productoId)
                carritoCompras2.push(producto);
                let div = document.createElement('div');
                div.classList.add('productoEnCarrito');
                div.innerHTML += ``
                contenedorCarrito.appendChild(div)
            }
            renderProductoCarrito()
}

verGaleriaC.addEventListener('click', () => {
    mostrar();
})*/

abrirModal1.addEventListener('click',()=>{
    modalContenedor.classList.toggle('modal-active')
    console.log("Abierto")
})  

abrirModal2.addEventListener('click',()=>{
    modalContenedor2.classList.toggle('modal-active')
    console.log("Abierto Modal 2")
}) 