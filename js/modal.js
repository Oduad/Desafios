const modalContenedor = document.querySelector('.modal-container'); //El punto . es por el QueryS
const abrirCarrito = document.getElementById('open')
const cerrarCarrito = document.getElementById('cerrar')

const modalContenedor2 = document.querySelector('.modal-container2'); //El punto . es por el QueryS
const abrirFormulario = document.getElementById('comprar')
const enviar = document.getElementById('enviar')
const cancelar = document.getElementById('cancelar')

abrirCarrito.addEventListener('click',()=>{
    modalContenedor.classList.toggle('modal-active')

})  

cerrarCarrito.addEventListener('click',()=>{
    modalContenedor.classList.toggle('modal-active')

}) 

abrirFormulario.addEventListener('click',()=>{
    modalContenedor2.classList.toggle('modal-active2')
}) 

enviar.addEventListener('click',()=>{
    modalContenedor2.classList.toggle('modal-active2')
    modalContenedor.classList.toggle('modal-active')
    //swa(`Gracias por su compra`, "DodgerBlue", 1000, 'success')
})

cancelar.addEventListener('click',()=>{
    modalContenedor2.classList.toggle('modal-active2')
}) 

//¿Se viene encapsulamiento y qué más en JS?