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
            for (let contenido of data) {
                const { nombre, precio, poster, marca, pais, categoria, id } = contenido;
                let div = document.createElement('div');
                div.classList.add('card');
                div.innerHTML += `
                <div class="card2 center" style="width: 8rem;">
                        <img class="responsive-img" width="100%" loading="lazy" src="${poster}" alt="" title="THE MARTIAN">
                    <div class="card-body black">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="yellow-text">Precio: $<span class="white-text">${precio}</span></p>
                        <p class="yellow-text">Categoría: <span class="white-text">${categoria}</span></p>
                        <p class="yellow-text">Marca: <span class="white-text">${marca}</span></p>
                        <p class="yellow-text">Pais: <span class="white-text">${pais}</span></p>
                        <button id="boton${id}" class="btn btn-primary">Ver </button>
                    </div>
                    <br>
                </div>`
                contenedorProductos.appendChild(div);

                const botonDOM = document.getElementById(`boton${id}`)
                botonDOM.addEventListener("click",()=>{
                    swa(`Información no disponible por el momento. &#128517`, "DodgerBlue", 2000, 'success')
                })
            }
        })
}

/*document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        obtenerContenido(URL)
    },500)
})*/

let contador = 0;

ver.addEventListener("click", () => {
    if (contador == 0) {
        obtenerContenido(URL)
        contador++;
        swa(`Estos son todos nuestros productos. &#128526; &#128526;`, "DodgerBlue", 2000, 'success')
    }else if(contador ==1){
        contador++;
        swa(`Ya abriste la galería de todos nuestros proyectos una vez. &#128521;`, "DodgerBlue", 2000, 'success')
    }else{
        swa(`Ya abriste la galería de todos nuestros proyectos ${contador} veces. &#128521;`, "DodgerBlue", 2000, 'success')
        contador++;
    }
}
)

const agregarP = document.getElementById("botonA")

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
        swa(`Por favor, ingrese el nombre del nuevo producto. &#128531;`, "DodgerBlue", 2000, 'success')
    }

    else if (marcaP == '') {
        swa(`Por favor, ingrese la marca del nuevo producto. &#128531;`, "DodgerBlue", 2000, 'success')
    }

    else if (categoriaP == '') {
        swa(`Por favor, ingrese la categoría del nuevo producto. &#128531;`, "DodgerBlue", 2000, 'success')
    }

    else if (precioP == '') {
        swa(`Por favor, ingrese el precio del nuevo producto. &#128531;`, "DodgerBlue", 2000, 'success')
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

            console.log(productos)
            guardarDatosDePr()

            td = document.createElement('td');
            botonEliminar = document.createElement('button')

            td.innerHTML = botonEliminar;
            fila.appendChild(botonEliminar);
            botonEliminar.textContent = `Eliminar`;
            botonEliminar.classList.add('btn');
            botonEliminar.classList.add('btn-eliminarF');
            botonEliminar.classList.add('btn-success');

            botonEliminar.addEventListener("click", (event) => {
                console.log("Eliminado es " + producto.id)
                productos.splice(Number(producto.id) - 1, 1)
                event.target.parentNode.remove();
                eliminarId()
                console.log(productos)
            })
            cuerpoTabla.appendChild(fila)
            tablaProducto.appendChild(cuerpoTabla)
        }
        else {
            swa(`Ese producto ya ha sido dado de alta. Por favor, ingrese otro &#129318;`, "DodgerBlue", 4000, 'success')
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

function guardarDatosDePr() {
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

function recuperoDatosDePr() {
    if (localStorage.getItem("datosDeUsr")) {
        const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
        nombre.value = datosDeUsr.nombre;
        marca.value = datosDeUsr.marca;
        categoria.value = datosDeUsr.categoria;
        precio.value = datosDeUsr.precio;
    }
}

recuperoDatosDePr()