const productosBD = [
    {
        "id": 1,
        "nombre": "Carnivor",
        "poster": "../img/carnivor.jpg",
        "precio": "980",
        "cantidad": "5 lb",
        "marca": "Marca 1",
        "categoria": "Proteína",
        "pais": "EUA"
    },
    {
        "id": 2,
        "nombre": "Gold St",
        "poster": "../img/goldst.jpg",
        "precio": "1100",
        "cantidad": "4 lb",
        "marca": "Marca 2",
        "categoria": "Proteína",
        "pais": "EUA"
    },
    {
        "id": 3,
        "nombre": "Prowinner",
        "poster": "../img/prowinner.jpg",
        "precio": "1250",
        "cantidad": "5.2 lb",
        "marca": "Marca 3",
        "categoria": "Proteína",
        "pais": "EUA"
    },
    {
        "id": 4,
        "nombre": "Hexapro",
        "poster": "../img/hexapro.jpg",
        "precio": "1650",
        "cantidad": "4 lb",
        "marca": "Marca 4",
        "categoria": "Proteína",
        "pais": "EUA"
    },
    {
        "id": 5,
        "nombre": "ISO100",
        "poster": "../img/iso.jpg",
        "precio": "1500",
        "cantidad": "5 lb",
        "marca": "Marca 5",
        "categoria": "Proteína",
        "pais": "EUA"
    },
    {
        "id": 6,
        "nombre": "Isopure",
        "poster": "../img/isopure.jpg",
        "precio": "1500",
        "cantidad": "5 lb",
        "marca": "Marca 6",
        "categoria": "Proteína",
        "pais": "EUA"
    },
    {
        "id": 7,
        "nombre": "Creatina 1",
        "poster": "../img/creatina1.jpg",
        "precio": "1300",
        "cantidad": "5 lb",
        "marca": "Marca 7",
        "categoria": "Creatina",
        "pais": "EUA"
    },
    {
        "id": 8,
        "nombre": "Creatina 2",
        "poster": "../img/creatina2.jpg",
        "precio": "1100",
        "cantidad": "5 lb",
        "marca": "Marca 8",
        "categoria": "Creatina",
        "pais": "EUA"
    },
    {
        "id": 9,
        "nombre": "Creatina 3",
        "poster": "../img/creatina3.jpg",
        "precio": "1000",
        "cantidad": "5 lb",
        "marca": "Marca 9",
        "categoria": "Creatina",
        "pais": "EUA"
    },
    {
        "id": 10,
        "nombre": "Creatina 4",
        "poster": "../img/creatina4.jpg",
        "precio": "1200",
        "cantidad": "5 lb",
        "marca": "Marca 10",
        "categoria": "Creatina",
        "pais": "EUA"
    },
    {
        "id": 11,
        "nombre": "Pro Whey",
        "poster": "../img/prote9.jpg",
        "precio": "1050",
        "cantidad": "5 lb",
        "marca": "Marca 11",
        "categoria": "Proteína",
        "pais": "EUA"
    },
    {
        "id": 12,
        "nombre": "Performance",
        "poster": "../img/prote10.jpg",
        "precio": "1200",
        "cantidad": "5 lb",
        "marca": "Marca 12",
        "categoria": "Proteína",
        "pais": "EUA"
    },
    {
        "id": 13,
        "nombre": "Creatina 1",
        "poster": "../img/creatina1.jpg",
        "precio": "500",
        "cantidad": "5 lb",
        "marca": "Marca 1",
        "categoria": "Creatina",
        "pais": "EUA"
    },
    {
        "id": 14,
        "nombre": "Creatina 2",
        "poster": "../img/creatina2.jpg",
        "precio": "450",
        "cantidad": "1.8 lb",
        "marca": "Marca 2",
        "categoria": "Creatina",
        "pais": "EUA"
    },
    {
        "id": 15,
        "nombre": "Creatina 3",
        "poster": "../img/creatina3.jpg",
        "precio": "550",
        "cantidad": "1.8 lb",
        "marca": "Marca 3",
        "categoria": "Creatina",
        "pais": "EUA"
    },
    {
        "id": 16,
        "nombre": "Creatina 4",
        "poster": "../img/creatina4.jpg",
        "precio": "500",
        "cantidad": "2 lb",
        "marca": "Marca 4",
        "categoria": "Creatina",
        "pais": "EUA"
    },
    {
        "id": 17,
        "nombre": "Prenda 1",
        "poster": "../img/ropaf1.jpg",
        "precio": "980",
        "cantidad": "5 lb",
        "marca": "Marca 1",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 18,
        "nombre": "Prenda 2",
        "poster": "../img/ropaf2.jpg",
        "precio": "1100",
        "cantidad": "4 lb",
        "marca": "Marca 2",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 19,
        "nombre": "Prenda 3",
        "poster": "../img/ropaf3.jpg",
        "precio": "1250",
        "cantidad": "5.2 lb",
        "marca": "Marca 3",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 20,
        "nombre": "Prenda 4",
        "poster": "../img/ropaf4.jpg",
        "precio": "1650",
        "cantidad": "4 lb",
        "marca": "Marca 4",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 21,
        "nombre": "Prenda 5",
        "poster": "../img/ropaf5.jpg",
        "precio": "1500",
        "cantidad": "5 lb",
        "marca": "Marca 5",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 22,
        "nombre": "Prenda 6",
        "poster": "../img/ropaf6.jpg",
        "precio": "1500",
        "cantidad": "5 lb",
        "marca": "Marca 6",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 23,
        "nombre": "Prenda 7",
        "poster": "../img/ropaf7.jpg",
        "precio": "1300",
        "cantidad": "5 lb",
        "marca": "Marca 7",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 24,
        "nombre": "Prenda 8",
        "poster": "../img/ropaf8.jpg",
        "precio": "1100",
        "cantidad": "5 lb",
        "marca": "Marca 8",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 25,
        "nombre": "Prenda 9",
        "poster": "../img/ropaf9.jpg",
        "precio": "1000",
        "cantidad": "5 lb",
        "marca": "Marca 9",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 26,
        "nombre": "Prenda 10",
        "poster": "../img/ropaf10.jpg",
        "precio": "1200",
        "cantidad": "5 lb",
        "marca": "Marca 10",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 27,
        "nombre": "Prenda 11",
        "poster": "../img/ropaf11.jpg",
        "precio": "1050",
        "cantidad": "5 lb",
        "marca": "Marca 11",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 28,
        "nombre": "Prenda 12",
        "poster": "../img/ropaf12.jpg",
        "precio": "1200",
        "cantidad": "5 lb",
        "marca": "Marca 12",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 29,
        "nombre": "Prenda 1",
        "poster": "../img/ropam1.jpg",
        "precio": "780",
        "cantidad": "5 lb",
        "marca": "Marca 1",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 30,
        "nombre": "Prenda 2",
        "poster": "../img/ropam2.jpg",
        "precio": "600",
        "cantidad": "4 lb",
        "marca": "Marca 2",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 31,
        "nombre": "Prenda 3",
        "poster": "../img/ropam3.jpg",
        "precio": "650",
        "cantidad": "5.2 lb",
        "marca": "Marca 3",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 32,
        "nombre": "Prenda 4",
        "poster": "../img/ropam4.jpg",
        "precio": "680",
        "cantidad": "4 lb",
        "marca": "Marca 4",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 33,
        "nombre": "Prenda 5",
        "poster": "../img/ropam5.jpg",
        "precio": "590",
        "cantidad": "5 lb",
        "marca": "Marca 5",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 34,
        "nombre": "Prenda 6",
        "poster": "../img/ropam6.jpg",
        "precio": "700",
        "cantidad": "5 lb",
        "marca": "Marca 6",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 35,
        "nombre": "Prenda 7",
        "poster": "../img/ropam7.jpg",
        "precio": "750",
        "cantidad": "5 lb",
        "marca": "Marca 7",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 36,
        "nombre": "Prenda 8",
        "poster": "../img/ropam8.jpg",
        "precio": "700",
        "cantidad": "5 lb",
        "marca": "Marca 8",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 37,
        "nombre": "Prenda 9",
        "poster": "../img/ropam9.jpg",
        "precio": "1300",
        "cantidad": "5 lb",
        "marca": "Marca 9",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 38,
        "nombre": "Prenda 10",
        "poster": "../img/ropam10.jpg",
        "precio": "1350",
        "cantidad": "5 lb",
        "marca": "Marca 10",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 39,
        "nombre": "Prenda 11",
        "poster": "../img/ropam11.jpg",
        "precio": "1250",
        "cantidad": "5 lb",
        "marca": "Marca 11",
        "categoria": "Ropa",
        "pais": "EUA"
    },
    {
        "id": 40,
        "nombre": "Prenda 12",
        "poster": "../img/ropam12.jpg",
        "precio": "1400",
        "cantidad": "5 lb",
        "marca": "Marca 12",
        "categoria": "Ropa",
        "pais": "EUA"
    }
]

//]export { productosBD };