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

    faltanDatos() ? toastSA("Complete todos los datos", "DodgerBlue", 2000, 'warning') : guardarDatos()
}

//Falta implementar el método donde sea necesario

const faltanDatos = () => {
    return (inputNombre.value == "" || inputTelefono.value == "" || inputEmail.value == "")
}

function guardarDatos() {

    const animacion = document.querySelector("#animacion")
    animacion.innerHTML = preloader()

    setTimeout(() => {
        const datosDeUsr = {
            nombre: inputNombre.value,
            telefono: inputTelefono.value,
            email: inputEmail.value
        }

        //Líneas agregada de desestructuración. Del objeto datosDeUsr solo se imprime el nombre
        const { nombre, telefono } = datosDeUsr
        //console.log("Gracias por su compra, "+nombre)
        toastSA(`Gracias por su compra, ` + nombre, "#66FF99", 2000, 'success', "black")
        //toastSA(`La hora es: ` + dt.toString(), "#66FF99", 2000, 'success', "black", 'center')
        //console.log("Probablemente nos comuniquemos al número "+telefono)
        //toastSA("Complete todos los datos","DodgerBlue",2000,'warning')

        let str = JSON.stringify(datosDeUsr)
        localStorage.setItem("datosDeUsr", str)
        animacion.innerHTML = ""
    }, 4000)

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

const toastSA = (mensaje, bgColor, tiempo, icono, color, position) => {
    Swal.fire({
        icon: icono || '',
        title: mensaje,
        position: position || 'top-end',
        showConfirmButton: true,
        toast: true,
        timer: tiempo || 3000,
        timerProgressBar: true,
        background: bgColor || 'white',
        color: color || '#ffffff',
        imageHeight: 1600
    })
}

/*const dt = DateTime.fromObject(
    { day: 22, hour: 12, month: 2 },
    { zone: 'America/Buenos_Aires', numberingSystem: 'Beng' }
)*/

const preloader = () => {
    return `<div class="preloader-wrapper active">
    <div class="spinner-layer spinner-yellow-only">
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper left">
        <div class="circle"></div>
      </div>
    </div>
  </div>`
}




//un en medio hay 2 team leader, hay un mockup en paralelo con JSON
//¿Qué ventaja tiene saber desarrollo web si hay gente que lo hace con plantillas?
//¿Por qué no puedo ejecutar toastSA en otra página desde navegador?