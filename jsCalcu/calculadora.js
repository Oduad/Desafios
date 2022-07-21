const boton = document.getElementById('calcular');

boton.addEventListener('click', () => {
    let masa = Number(document.getElementById("inputWeight").value);
    let altura = Number(document.getElementById('inputHeight').value);
    let imc = masa / (altura * altura)
    console.log(imc)
    //swa(`${producto.nombre} eliminado del carrito`, "DodgerBlue", 1000, 'success')
})