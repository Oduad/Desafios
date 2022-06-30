import { creatinasDisponibles } from './creatinasDisponibles.js'
import { carritoIndex } from './carritoIndexCre.js'

//Esto corresponde al archivo entregaSups1
const mostrarProductos = (productosLlegados) => {
    const contenedorProductos = document.getElementById('creatinas-contenedor');

    productosLlegados.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');  //classList lee las clases en proteinas-contenedor y add es Para agregar una clase(card) en ese div
        div.innerHTML += `<div class="card" style="width: 8rem;">
                    <img src="${producto.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio:$${producto.precio}</p>
                        <button class="btn btn-primary" id="boton${producto.id}">Comprar</button>
                    </div>
      </div>`;  //Esto es lo que va en ese card

        contenedorProductos.appendChild(div);

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', () => {
            carritoIndex(producto.id);
            alert(`Se agregó ${producto.nombre}`);
        })

    })
}

//mostrarProductos(creatinasDisponibles)