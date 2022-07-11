const productos = ['Proteína 1', 'Proteína 2', 'Proteína 3', 'Snacks 1', 'Snacks 2 ', 'Snacks 3']
const carrito = []

const titulo = document.getElementById("titulo")
const slogan = document.getElementById("slogan")

const listadoFrutas = document.getElementById("listadoFrutas")
const listadoCarrito = document.getElementById("listadoCarrito")

titulo.innerHTML = "ELIGE TUS PRODUCTOS"

const imagen = document.querySelector("img")
/*imagen.onclick = ()=>{
    alert("Detectando el evento click")
}*/

imagen.addEventListener('click', () => {
    swa(`Detectando el evento click.`, "DodgerBlue", 2000, 'info')
})

/*Uso de la desestructuración*/
const [a, b] = productos
console.log("Valor de a: " + a + ". Valor de b: " + b)
const [, , c, d] = productos
console.log("Valor de c: " + c + ". Valor de d: " + d)
/*USO DE SPREAD*/
console.log("Tenemos disponibles los siguientes productos:")
console.log(...productos)

const swa = (mensaje, bgColor, tiempo, icono, color) => {
    Swal.fire({
        icon: icono || '',
        title: mensaje,
        position: 'top-end',
        showConfirmButton: true,
        toast: true,
        timer: tiempo || 3000,
        timerProgressBar: true,
        background: bgColor || 'white',
        color: color || '#ffffff'
    })
}

cargarProductos = () => {
    //debugger
    listadoFrutas.innerHTML = ""
    for (const producto of productos) {
        const li = document.createElement("li")     // Crea un li de manera dinámica
        li.className = "collection-item red-text"   // Le creamos esas clases
        li.innerHTML = producto                     // Texto que tiene que mostrar
        li.id = producto + "Prod"                   // Creamos un id único
        li.addEventListener('click', () => {
            //agregarAlCarrito(producto) ¿Por qué no se usó esta línea?
            agregarAlCarrito(`${producto}`)
        })
        listadoFrutas.append(li)                    // Se agrega el elemento creado (li)
    }
}

cargarProductos()
swa(`Se han cargado todos los productos en el carrito.`, "DodgerBlue", 2000, 'info')

agregarAlCarrito = (prod) => {
    carrito.push(prod) //Debajo de esto debería guardar el carrito
    guardoCarrito1()
    const liNuevoProducto = document.createElement("li")      // Crea un li de manera dinámica
    liNuevoProducto.className = "collection-item blue-text"   // Le creamos esas clases
    liNuevoProducto.innerHTML = prod                          // Texto que tiene que mostrar
    liNuevoProducto.id = prod + "Encarrito"                    // Creamos un id único
    liNuevoProducto.addEventListener('dblclick', () => {
        removerDelCarrito(`${liNuevoProducto.id}`)
    })
    listadoCarrito.append(liNuevoProducto)                    // Se agrega el elemento creado (li)
}

removerDelCarrito = (prod) => {
    const productoAremover = document.getElementById(`${prod}`)
    productoAremover.remove()
    item = carrito.indexOf(productoAremover.innerText)
    /*Uso del operador ternario y AND*/
    item >= 0 ? (carrito.splice(item, 1) && guardoCarrito1()) : (carrito.splice(item, 1))
    /*if (item >= 0) {
        carrito.splice(item, 1)
        guardoCarrito1()
    }else{
        carrito.splice(item, 1)
    }*/
    //console.warn(`${prod} ha sido eliminado del carrito`)
    swa(`${prod} ha sido eliminado del carrito`, "DodgerBlue", 2000, 'success')
    /*Uso del operador ternario*/
    carrito.length > 0 ? swa(`Te quedan ${carrito.length} productos en el carrito.`, "DodgerBlue", 2000, 'info') :
        swa(`El carrito está vacío.`, "DodgerBlue", 2000, 'info')
}

function guardoCarrito1() {
    /*if (carrito.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }*/

    //Optimización con operador ternario y AND
    carrito.length > 0 ? (localStorage.setItem("carrito", JSON.stringify(carrito))) : (localStorage.removeItem("carrito"))

}

function recuperoCarrito() {
    //debugger
    if (miCarrito = JSON.parse(localStorage.getItem("carrito"))) {
        miCarrito.forEach(fruta => {
            carrito.push(fruta)
        });
    }
}

recuperoCarrito()
swa(`El carrito ha sido recuperado.`, "DodgerBlue", 2000, 'info')

//¿Cuáles son las variables nativas?

const preloader = () => {
    return `<div class="preloader-wrapper active">
    <div class="spinner-layer spinner-red-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`
}

const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")

const URL = `../JsEntregas/fetch.json`

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



