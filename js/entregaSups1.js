import { productosDisponibles } from './proteinasDisp.js'

const mostrarProductos = (productosLlegados) => {
    const contenedorProductos = document.getElementById('proteinas-contenedor');

    productosLlegados.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');  //class lee las clases en productos- contenedor y add es Para agregar una clase(card) en ese div
        div.innerHTML += `<div class="card" style="width: 8rem;">
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

/*const productosDisponibles = [
    {
        id: 1,
        nombre: "Gold Whwy",
        precio: 1200,
        img: '../img/goldStWhey.jpg'
    },
    {
        id: 2,
        nombre: "Isopure",
        precio: 1400,
        img: '../img/isopure.jpg'
    },
    {
        id: 3,
        nombre: "Hexapro",
        precio: 1100,
        img: '../img/hexapro.jpg'
    }
]*/