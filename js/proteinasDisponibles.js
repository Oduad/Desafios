/*Si el arreglo crece en algún momento, entonces se ocupa let*/

let contadorProductos = 1;

const proteinasDisponibles = [
    {
        id: contadorProductos++,
        nombre: "Gold Wh",
        precio: 1200,
        img: '../img/goldStWhey.jpg'
    },
    {
        id: contadorProductos++,
        nombre: "Isopure",
        precio: 1400,
        img: '../img/isopure.jpg'
    },
    {
        id: contadorProductos++,
        nombre: "Hexapro",
        precio: 1100,
        img: '../img/hexapro.jpg'
    },
    {
        id: contadorProductos++,
        nombre: "Carnivor",
        precio: 1200,
        img: '../img/carnivor.jpg'
    },
    {
        id: contadorProductos++,
        nombre: "Iso100",
        precio: 1400,
        img: '../img/iso.jpg'
    },
    {
        id: contadorProductos++,
        nombre: "Pro-winner",
        precio: 1100,
        img: '../img/download.jpg'
    }
]

export { proteinasDisponibles };
export { contadorProductos };

//var es antes de EMC6
//Lo mejor sería usar let


//Duda: El arreglo puede crecer, ¿No sería mejor con let en línea 1? --> Sí, con let
//¿Cómo hago mis id dinámicos? ¿Tendría que meter un método para que agregue cada producto 
//que llegue con el siguiente id? Podríamos hacer una variable que lleve una numeración
//