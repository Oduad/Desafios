import { productosDisponibles } from './proteinasDisp.js'

const mostrarProductos = (productosLlegados) => {
    const contenedorProductos = document.getElementById('proteinas-contenedor');

    productosLlegados.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');  //class lee las clases en productos- contenedor y add es Para agregar una clase(card) en ese div
        div.innerHTML += `<div class="card" style="width: 18rem;">
                    <img src="${producto.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio:$${producto.precio}</p>
                        <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
                    </div>
      </div>`;  //Esto es lo que va en ese card

        contenedorProductos.appendChild(div);

    })
}

mostrarProductos(productosDisponibles)

//Duda 1: ¿En las líneas 3 y ___ no sería mejor var?