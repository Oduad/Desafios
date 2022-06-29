const modalContenedor = document.querySelector('.modal-container'); //El punto . es por el QueryS

const abrirCarrito = document.getElementById('open')

const cerrarCarrito = document.getElementById('cerrar')

abrirCarrito.addEventListener('click',()=>{
    modalContenedor.classList.toggle('modal-active')

})  

cerrarCarrito.addEventListener('click',()=>{
    modalContenedor.classList.toggle('modal-active')

})  

//¿Se viene encapsulamiento y qué más en JS?