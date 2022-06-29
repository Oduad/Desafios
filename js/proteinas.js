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