const inputNombre = document.querySelector("#inputNombre2")
const inputTelefono = document.querySelector("#inputTelefono2")
const inputEmail = document.querySelector("#inputEmail2")
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
    //¿Esto lo permite sin existir porque no se está ocupando?
})