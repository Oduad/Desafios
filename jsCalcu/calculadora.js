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
    else if (15 <= imc && imc < 15.9) {
        caso = 'Delgadez Severa'
    }
    else if (15.9 <= imc && imc < 18.4) {
        caso = 'Delgadez'
    }
    else if (18.4 <= imc && imc < 24.9) {
        caso = 'Peso Saludable'
    }
    else if (24.9 <= imc && imc < 26.9) {
        caso = 'Sobrepeso Grado 1'
    }
    else if (26.9 <= imc && imc < 29.9) {
        caso = 'Sobrepeso Grado 2'
    }
    else if (29.9 <= imc && imc < 34.9) {
        caso = 'Obesidad Grado 1'
    }
    else if (34.9 <= imc && imc < 39.9) {
        caso = 'Obesidad Grado 2'
    }
    else if (39.9 <= imc && imc < 49.9) {
        caso = 'Obesidad Mórbida'
    } 

    if(altura>2.53 || altura<0.73){
        swa(`Nadie en la tierra tiene esa estatura. Ingrésala nuevamente.`, "DodgerBlue", 4000, 'success')
    }
    else if(masa>300){
        swa(`Nadie en la tierra tiene esa masa. Ingrésala nuevamente.`, "DodgerBlue", 4000, 'success')
    }
    else if(nombre == "Xochitl" || nombre == "xochitl"){
        swa(`${nombre}, eres especial para Oduad\n Tu IMC es ${imc} \n Estás en ${caso}`, "DodgerBlue", 4000, 'success')
    }else{
    swa(`${nombre}\n Tu IMC es ${imc} \n Estás en ${caso}`, "DodgerBlue", 3000, 'success')}
})
