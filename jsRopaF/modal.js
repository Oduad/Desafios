import { swa } from "./ropaF.js";
import {inputNombre, inputEmail, inputTelefono} from "./mainForm.js"
//

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
    console.log("El valor es: "+inputNombre.value)
    if(inputNombre.value ==''){
        swa(`Por favor, ingrese su nombre.`, "DodgerBlue", 1000, 'success')
    }
    else if(inputTelefono.value ==''){
        swa(`Por favor, ingrese su número de celular.`, "DodgerBlue", 1000, 'success')
    }
    else if(inputEmail.value ==''){
        swa(`Por favor, ingrese su email.`, "DodgerBlue", 1000, 'success')
    }else{
        modalContenedor.classList.toggle('modal-active')
        modalContenedor2.classList.toggle('modal-active2')
        swa(`Muchas gracias por su compra, ${inputNombre.value}.`, "DodgerBlue", 1000, 'success')
    }
})

cancelar.addEventListener('click',()=>{
    modalContenedor2.classList.toggle('modal-active2')
}) 

//¿Se viene encapsulamiento y qué más en JS?

const profesor = document.getElementById('profesor');

profesor.addEventListener('click', () => {
    swa(`Agradecimientos al profesor Fernando Luna por su entrega y dedicación en cada clase.`, "DodgerBlue", 4000, 'success')
    
})

const tutor = document.getElementById('tutor');

tutor.addEventListener('click', () => {
    swa(`Agradecimientos al tutor Julio César Caro Cota por su tiempo en cada una de las dudas.`, "DodgerBlue", 4000, 'success')
})