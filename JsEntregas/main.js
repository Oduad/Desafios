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
    guardoCarrito()
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
    if(item>=0){
        carrito.splice(item,1)
        guardoCarrito()
    }
    console.warn(`${prod} ha sido eliminado del carrito`)
}

function guardoCarrito(){
    if(carrito.length>0){
        localStorage.setItem("carrito",JSON.stringify(carrito))
    }
}

function recuperoCarrito(){
    //debugger
    if(miCarrito = JSON.parse(localStorage.getItem("carrito"))){
        miCarrito.forEach(fruta => {
            carrito.push(fruta)
        });
    }
}

recuperoCarrito()