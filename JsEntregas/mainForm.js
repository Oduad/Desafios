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

const focosEnCampos =() =>{

const campos = document.querySelectorAll("input")
    for(let campo of campos){
        if(campo.type != "submit"){
            campo.addEventListener('focus', ()=>campo.className = "fondo-inputs")
            campo.addEventListener('blur', ()=>campo.className = "")
        }
    }
}

focosEnCampos()

document.addEventListener('submit', (e)=>{
    e.preventDefault() //Previne que suceda el evento por defecto ()
    guardarDatosDeUsr()
    alert("Gracias por su compra")
}) 

function guardarDatosDeUsr(){
    //debugger
    const datosDeUsr ={
        nombre: inputNombre.value,
        telefono: inputTelefono.value,
        email: inputEmail.value
    }
    let str = JSON.stringify(datosDeUsr)
    localStorage.setItem("datosDeUsr",str)
}

function recuperarDatosDeUsr(){
    if(localStorage.getItem("datosDeUsr")){
        const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
        inputNombre.value= datosDeUsr.nombre,
        inputTelefono.value = datosDeUsr.telefono,
        inputEmail.value = datosDeUsr.email
    }
    const carrito = JSON.parse(localStorage.getItem("carrito"))
    document.querySelector("#productosComprados").innerText= carrito.join(" - ")
}

recuperarDatosDeUsr() 