import { proteinasDisponibles } from './proteinasDisponibles.js'
import { carritoIndex } from './carritoIndexSup.js'

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

//Esto corresponde al archivo entregaSups1
/*const mostrarProductos = (productosLlegados) => {
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

mostrarProductos(proteinasDisponibles)

Parte de Storage
function guardarDatos(producto) {
    const datosProducto = {
        nombre: producto.nombre,
        id: producto.id,
        precio: producto.precio
    }
    let str = JSON.stringify(datosProducto)
    localStorage.setItem("datosProduct", str)
}*/

const contenidoDOM = document.querySelector("#contenido");
const cargandoDOM = document.querySelector("#cargando");
const URL = `../js/todos.json`

/*const retornoCardContenido = (contenido) => {
    const {nombre, poster, marca, pais, id } = contenido
    return `
    <div class="card" style="width: 12rem;">
            <img class="responsive-img" width="100%" loading="lazy" src="${poster}" alt="" title="THE MARTIAN">
        <div class="card-body black">
            <h5 class="card-title">${nombre}</h5>
            <p class="yellow-text">Marca: <span class="white-text">${marca}</span></p>
            <p class="yellow-text">Pais: <span class="white-text">${pais}</span></p>
            <button class="btn btn-primary"${id}">Comprar</button>
        </div>
        <br>
    </div>`
    
}*/

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
    const contenedorProductos = document.getElementById('proteinas-contenedor');
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            //console.table(data)
            for (let contenido of data) {
                const {nombre, poster, marca, pais, id } = contenido
                if(contenido.categoria === "Proteína"){
                //cardsAmostrar += retornoCardContenido(contenido)
                const div = document.createElement('div');
                div.classList.add('card');
                //div.innerHTML += retornoCardContenido(contenido)
                div.innerHTML += `
                <div class="card" style="width: 12rem;">
                        <img class="responsive-img" width="100%" loading="lazy" src="${poster}" alt="" title="THE MARTIAN">
                    <div class="card-body black">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="yellow-text">Marca: <span class="white-text">${marca}</span></p>
                        <p class="yellow-text">Pais: <span class="white-text">${pais}</span></p>
                        <button id="boton${id}" class="btn btn-primary">Comprar</button>
                    </div>
                    <br>
                </div>`
                contenedorProductos.appendChild(div);
                const boton = document.getElementById(`boton${id}`);
                boton.addEventListener('click', () => { 
                    carritoIndex2(id);
                    guardarDatos2(contenido);
                    swa(`Producto agregado al carrito`, "DodgerBlue", 1000, 'success')
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
    swa(`Producto guardado en localStorage`, "DodgerBlue", 3000, 'success') 
    let str = JSON.stringify(datosProducto)
    localStorage.setItem("datosProduct", str)
}

let carritoCompras2 = [];

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
                <button id="eliminar${producto.id}" class="boton-eliminar">Eliminar<i class="fa-solid fa-trash-can"></i></button>`
        
                contenedorCarrito.appendChild(div)
            }
            renderProductoCarrito()
        })
}

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