const productos = ['Proteína 1', 'Proteína 2', 'Proteína 3', 'Snacks 1', 'Snacks 2 ', 'Snacks 3']
/*const productos = ['Arandanos', 'Grosella', 'Papaya', 'Manzana', 'Pera', 'Frutillas', 'Anana', 'Durazno', 'Ciruelas', 'Arándano', 'Papaya', 'Mango']
const productos = [{Nombre: 'Arandanos'}, {Nombre: 'Grosella'},{Nombre: 'Papaya'}]*/
const carrito = []

const titulo = document.getElementById("titulo")
const slogan = document.getElementById("slogan")

const listadoFrutas = document.getElementById("listadoFrutas")
const listadoCarrito = document.getElementById("listadoCarrito")

titulo.innerHTML = "ELIGE FRUTAS"

//No funcionq bien, todo lo hace en un ul y necesitamos agregar elementos li
/*function cargarProductos() {
    debugger
    listadoFrutas.innerHTML = ""
    
    for (const producto of productos) {
        listadoFrutas.innerText += producto

    }
}*/

cargarProductos = () => {
    //debugger
    listadoFrutas.innerHTML = ""
    for (const producto of productos) {
        const li = document.createElement("li")     // Crea un li de manera dinámica
        li.className = "collection-item red-text"   // Le creamos esas clases
        li.innerHTML = producto                     // Texto que tiene que mostrar
        li.id = producto + "Prod"                   // Creamos un id único
        li.addEventListener('click', () => {
            debugger
            //agregarAlCarrito(producto) ¿Por qué no se usó esta línea?
            agregarAlCarrito(`${producto}`)
        })
        listadoFrutas.append(li)                    // Se agrega el elemento creado (li)
    }
}

cargarProductos()

agregarAlCarrito = (prod) => {
    carrito.push(prod)
}


const imagen = document.querySelector("img")
/*imagen.onclick = ()=>{
    alert("Detectando el evento click")
}*/

imagen.addEventListener('click', () => {
    alert("Detectando el evento click")
})




//DOJO, ¿Se viene encapsulamiento y qué más?
//El width en img responsive está permitido? onclick en html5 no es buena práctica