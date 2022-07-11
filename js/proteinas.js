import { proteinasDisponibles } from './proteinasDisponibles.js'
import { carritoIndex } from './carritoIndexSup.js'

//Esto corresponde al archivo entregaSups1
const mostrarProductos = (productosLlegados) => {
    const contenedorProductos = document.getElementById('proteinas-contenedor');

    productosLlegados.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');  //classList lee las clases en proteinas-contenedor y add es Para agregar una clase(card) en ese div
        div.innerHTML += `<div class="card" style="width: 8rem;">
                    <img src="${producto.img}" class="card-img-top responsive-img" width="100%" alt="Foto del producto">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Id: ${producto.id}</p>
                        <p class="card-text">Precio:$ ${producto.precio}</p>
                        <button class="btn btn-primary" id="boton${producto.id}">Comprar</button>
                    </div>
      </div>`;  //Esto es lo que va en ese card

        contenedorProductos.appendChild(div);

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', () => {
            carritoIndex(producto.id);
            guardarDatos(producto);
            alert(`Se agregó ${producto.nombre}`);
        })

    })
}

/*Parte de Storage*/
function guardarDatos(producto) {
    const datosProducto = {
        nombre: producto.nombre,
        id: producto.id,
        precio: producto.precio
    }
    let str = JSON.stringify(datosProducto)
    localStorage.setItem("datosProduct", str)
}

mostrarProductos(proteinasDisponibles)

const contenidoDOM = document.querySelector("#contenido");
const cargandoDOM = document.querySelector("#cargando");
const URL = `../js/todos.json`

const retornoCardContenido = (contenido) => {

    const { poster, marca, pais } = contenido
    return `<div class="col s12 m6 l3">
    <div class="card  z-depth-2">
        <div class="card-image">
            <img loading="lazy" src="${poster}" alt="" title="THE MARTIAN">
        </div>
        <div class="card-content black">
            <p class="yellow-text">Marca: <span class="white-text">${marca}</span></p>
            <p class="yellow-text">Pais: <span class="white-text">${pais}</span></p>
        </div>
        <br>
    </div>
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
    let cardsAmostrar = ""
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            //console.table(data)
            for (contenido of data) {
                cardsAmostrar += retornoCardContenido(contenido)
            }
            contenidoDOM.innerHTML=cardsAmostrar
        })
        .catch((error)=> contenidoDOM.innerHTML= retornoError() )
        .finally(()=>cargandoDOM.innerHTML="")
}

document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        obtenerContenido(URL)
    },2000)
})

//Dudas
//1. ¿En las líneas 5 no sería mejor var? const porque siempre se pide
//2. ¿Qué tan difícil es lo que falta de clases?
//3. ¿Dónde está el after de DOM y Eventos?
//4. ¿Cómo haría la sesión  grandes rasgos? Hay un botón de administtración
// y hay yun login con usuario y contraeña. Con una librería se encripta información. Hay una llave
// Se tiene una BD o un control de accesos y a través de un servicio se hace una solicitud.
// Hacer página y formulario y que me lleve al formulario de alto.
// DOJO's para lenguajes de programación - El recomendado es el toolkit que son ejercicios de entrenamiento
// Adoptando la lógica,  