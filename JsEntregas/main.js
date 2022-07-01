const productos = ['Proteína 1', 'Proteína 2', 'Proteína 3', 'Snacks 1', 'Snacks 2 ', 'Snacks 3']
/*const productos = ['Arandanos', 'Grosella', 'Papaya', 'Manzana', 'Pera', 'Frutillas', 'Anana', 'Durazno', 'Ciruelas', 'Arándano', 'Papaya', 'Mango']
const productos = [{Nombre: 'Arandanos'}, {Nombre: 'Grosella'},{Nombre: 'Papaya'}]*/
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
    alert("Detectando el evento click")
})

/*Uso de la desestructuración*/
const [a, b] = productos
console.log("Valor de a: " + a + ". Valor de b: " + b)
const [, , c, d] = productos
console.log("Valor de c: " + c + ". Valor de d: " + d)
/*USO DE SPREAD*/
console.log("Tenemos disponibles los siguientes productos:")
console.log(...productos)

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
    console.warn(`${prod} ha sido eliminado del carrito`)
    /*Uso del operador ternario*/
    carrito.length > 0 ? console.log(`Te quedan ${carrito.length} productos en el carrito.`) : console.log('El carrito está vacío.')
}

function guardoCarrito1() {
    /*if (carrito.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }*/

    //Optimización con operador ternario y AND
    carrito.length > 0?(localStorage.setItem("carrito", JSON.stringify(carrito))):(localStorage.removeItem("carrito"))

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