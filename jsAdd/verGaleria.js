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
}

const ver = document.getElementById("botonVer")

const contenidoDOM = document.querySelector("#contenido");
const cargandoDOM = document.querySelector("#cargando");
const URL = `../jsAdd/todos.json`

const obtenerContenido = (URL) => {
    const contenedorProductos = document.getElementById('agregar-contenedor');
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            //console.table(data)
            for (let contenido of data) {
                const { nombre, precio, poster, marca, pais, id } = contenido

                const div = document.createElement('div');
                div.classList.add('card');

                div.innerHTML += `
                <div class="card center" style="width: 10rem;">
                        <img class="responsive-img" width="80%" loading="lazy" src="${poster}" alt="" title="THE MARTIAN">
                    <div class="card-body black">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="yellow-text">Precio: $<span class="white-text">${precio}</span></p>
                        <p class="yellow-text">Marca: <span class="white-text">${marca}</span></p>
                        <p class="yellow-text">Pais: <span class="white-text">${pais}</span></p>
                        <button id="boton${id}" class="btn btn-primary">Add <ion-icon name="cart"></ion-icon> </button>
                    </div>
                    <br>
                </div>`

                console.log("Tenemos esto: " + div)
                contenedorProductos.appendChild(div);
            }
        })
}

/*document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        obtenerContenido(URL)
    },500)
})

ver.addEventListener("click",()=>{
        obtenerContenido(URL)
}
)*/

const agregarP = document.getElementById("boton1")

let productos = new Array(0);

let tablaProducto = document.getElementById('productos');
let cuerpoTabla = document.createElement('tbody');

function agregar(producto) {
    productos.forEach(p => {
        console.log("El valor es " + nombreP)
        console.log("El valor es " + precioP)
        let fila = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = p.id;
        fila.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = p.nombre;
        fila.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = p.precio;
        fila.appendChild(td);

        cuerpoTabla.appendChild(fila)
    })
}

agregarP.addEventListener('click', () => {

    let nombreP = document.getElementById('nombre').value;
    let precioP = document.getElementById('precio').value
    let marcaP = document.getElementById('marca').value;
    let categoriaP = document.getElementById('categoria').value;

    if (nombreP == '') {
        swa(`Por favor, ingrese el nombre del nuevo producto.`, "DodgerBlue", 4000, 'success')
    }

    else if (marcaP == '') {
        swa(`Por favor, ingrese la marca del nuevo producto.`, "DodgerBlue", 4000, 'success')
    }

    else if (categoriaP == '') {
        swa(`Por favor, ingrese la categoría del nuevo producto.`, "DodgerBlue", 4000, 'success')
    }

    else if (precioP == '') {
        swa(`Por favor, ingrese el precio del nuevo producto.`, "DodgerBlue", 4000, 'success')
    }
    else {
        const resultado1 = productos.filter(prod => prod.nombre === nombreP && prod.marca === marcaP)
        //const resultado2 = productos.find(prod => prod.marca === marcaP)

        console.log(resultado1)
        //console.log(resultado2)

        if (resultado1.length === 0) {
            let producto = { id: generadId(), nombre: nombreP, marca: marcaP, categoria: categoriaP, precio: precioP };
            productos.push(producto)

            let fila = document.createElement('tr');

            let td = document.createElement('td');
            td.innerHTML = producto.id;
            fila.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = producto.nombre;
            fila.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = producto.marca;
            fila.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = producto.categoria;
            fila.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = producto.precio;
            fila.appendChild(td);

            td = document.createElement('td');
            botonEliminar = document.createElement('button')

            td.innerHTML = botonEliminar;
            fila.appendChild(botonEliminar);
            botonEliminar.textContent = `Eliminar`;
            botonEliminar.classList.add('btn');
            botonEliminar.classList.add('btn-eliminarF');
            botonEliminar.classList.add('btn-success');

            botonEliminar.addEventListener("click", (event) => {
                event.target.parentNode.remove();
            })
            cuerpoTabla.appendChild(fila)
            tablaProducto.appendChild(cuerpoTabla)
        }
        else {
            swa(`Ese producto ya ha sido dado de alta. Por favor, ingrese otro`, "DodgerBlue", 4000, 'success')
        }
    }
})

//let producto = { id: generadId(), nombre: nombreP, marca: marcaP, categoria: categoriaP, precio: precioP };
//      productos.push(producto);


let id = 0;
function generadId() {
    id += 1;
    return id
}

function eliminarId() {
    id -= 1;
    return id
}