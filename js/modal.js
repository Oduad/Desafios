import {swa} from "./proteinas.js";
import { inputEmail, inputNombre, inputTelefono } from "./mainForm.js"; 

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
        swa(`Por favor, ingrese su nombre. &#9998;`, "DodgerBlue", 1000, 'success')
    }
    else if(inputTelefono.value ==''){
        swa(`Por favor, ingrese su número de celular. &#9998;`, "DodgerBlue", 1000, 'success')
    }
    else if(inputEmail.value ==''){
        swa(`Por favor, ingrese su email. &#9998;`, "DodgerBlue", 1000, 'success')
    }else{
        //guardarDatosDePr()
        modalContenedor.classList.toggle('modal-active')
        modalContenedor2.classList.toggle('modal-active2')
        swa(`Muchas gracias por su compra, ${inputNombre.value}. &#128512; &#128512;`, "DodgerBlue", 2000, 'success')
    }
})

cancelar.addEventListener('click',()=>{
    modalContenedor2.classList.toggle('modal-active2')
}) 

//¿Se viene encapsulamiento y qué más en JS?

const profesor = document.getElementById('profesor');

profesor.addEventListener('click', () => {
    swa(`Agradecimientos al profesor Fernando Luna por su entrega y dedicación en cada clase. <br> &#127891; &#127891; &#127891;`, "#eeccff", 4000, 'success')
    
})

const tutor = document.getElementById('tutor');

tutor.addEventListener('click', () => {
    swa(`Agradecimientos al tutor Julio César Caro Cota por su tiempo dedicado a aclarar cada una de mis dudas. <br> &#127891; &#127891; &#127891;`, "#eeccff", 4000, 'success')
})

/*function guardarDatosDePr(){
    const datosDeUsr = {
        nombre: nombre.value,
        marca: marca.value,
        categoria: categoria.value,
        precio: precio.value
    }
    //localStorage.setItem("datosDeUsuario", datosDeUsuario)
    //*La línea de arriba guarda un [object, Object], por eso procedemos así:
    let str = JSON.stringify(datosDeUsr) 
    localStorage.setItem("datosDeUsr", str)
    //*Pasó porque almacenaba JSON que es un String con un formato específico
}

function recuperoDatosDePr(){
    if(localStorage.getItem("datosDeUsr")){
        const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
        nombre.value = datosDeUsr.nombre;
        marca.value = datosDeUsr.marca;
        categoria.value = datosDeUsr.categoria;
        precio.value = datosDeUsr.precio;
    }
}

recuperoDatosDePr()*/