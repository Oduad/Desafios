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
}//Falta arreglar el Swal 

const boton = document.getElementById('calcular');

boton.addEventListener('click', () => {
    let nombre = document.getElementById('inputName').value;
    let masa = Number(document.getElementById("inputWeight").value);
    let altura = Number(document.getElementById('inputHeight').value);
    let imc = (masa / (altura * altura)).toFixed(2);
    let caso = '';

    if (imc < 15) {
        caso = 'Delgadez muy Severa'
    }
    if (15 <= imc && imc < 15.9) {
        caso = 'Delgadez Severa'
    }
    if (15.9 <= imc && imc< 18.4) {
        caso = 'Delgadez'
    }
    if (18.4 <= imc && imc< 24.9) {
        caso = 'Peso Saludable'
    }
    else caso = 'Sobrepeso'

    swa(`${nombre}\n Tu IMC es ${imc} \n Estás en ${caso}`, "DodgerBlue", 3000, 'success')
})