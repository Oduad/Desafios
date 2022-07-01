const inputNombre = document.querySelector("#inputNombre")
const inputTelefono = document.querySelector("#inputTelefono")
const inputEmail = document.querySelector("#inputEmail")
const btnSubmit = document.querySelector("#submit")

let datosDeInput = ""

inputNombre.addEventListener("focus", () => {
    inputNombre.className = "fondo-inputs"
})
inputNombre.addEventListener("blur", () => {
    inputNombre.className = ""
})

const focosEnCampos = () => {

    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener('focus', () => campo.className = "fondo-inputs")
            campo.addEventListener('blur', () => campo.className = "")
        }
    }
}

focosEnCampos()

document.addEventListener('submit', (e) => {
    e.preventDefault() //Previne que suceda el evento por defecto ()
    guardarDatosDeUsr()
    //alert("Gracias por su compra")
})

function guardarDatosDeUsr() {
    //debugger
    /*if (faltanDatos()) {
        console.log('Falta cargar datos')
    } else {
        const datosDeUsr = {
            nombre: inputNombre.value,
            telefono: inputTelefono.value,
            email: inputEmail.value
        }
        let str = JSON.stringify(datosDeUsr)
        localStorage.setItem("datosDeUsr", str)
    }
    alert("Gracias por su compra")*/

    faltanDatos() ? console.log('Complete todos los datos') : guardarDatos()
}

const faltanDatos = () => {
    return (inputNombre.value == "" || inputTelefono.value == "" || inputEmail.value == "")
}

function guardarDatos(){
            const datosDeUsr = {
            nombre: inputNombre.value,
            telefono: inputTelefono.value,
            email: inputEmail.value
        }

        //Líneas agregada de desestructuración. Del objeto datosDeUsr solo se imprime el nombre
        const {nombre,telefono} = datosDeUsr
        console.log("Gracias por su compra, "+nombre)
        console.log("Probablemente nos comuniquemos al número "+telefono)

        let str = JSON.stringify(datosDeUsr)
        localStorage.setItem("datosDeUsr", str)
    }

function recuperarDatosDeUsr() {
    if (localStorage.getItem("datosDeUsr")) {
        const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
        inputNombre.value = datosDeUsr.nombre,
            inputTelefono.value = datosDeUsr.telefono,
            inputEmail.value = datosDeUsr.email
    }
    const carrito = JSON.parse(localStorage.getItem("carrito"))

    //Aquí le voy a meter operadores

    document.querySelector("#productosComprados").innerText = carrito.join(" - ")
}

recuperarDatosDeUsr() 


//un en medio hay 2 team leader, hay un mockup en paralelo con JSON
//¿Qué ventaja tiene saber desarrollo web si hay gente que lo hace con plantillas?
