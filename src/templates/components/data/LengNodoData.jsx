const LengNodoData = () => [
    { 
        id: '1',
        position: { x: 0, y: 0 },
        type: 'padreLengNodoModel'
    },
    {
        id: '2',
        position: { x: -900, y: 120 },
        data: { 
            "id": 2,
            "nombre": "Java",
            "resumen": "Utilizado para crear aplicaciones web.",
            "codigoBarras": "codigo de barras",
            "codigoQR": "/src/assets/img/QR/SVG/javaLogo.svg",
            "serial": 321316,
            "handleDirection": "right",
        },
        type: 'hijoLengNodoModel',
    },
    {
        id: '3',
        position: { x: -900, y: -150 },
        data: {
            "id": 3,
            "nombre": "JavaScript",
            "resumen": "Utilizado para crear aplicaciones web y API",
            "codigoBarras": "codigo de barras",
            "codigoQR": "/src/assets/img/QR/SVG/javaScriptLogo.svg",
            "serial": 321316,
            "handleDirection": "right"
        },
        type: 'hijoLengNodoModel',
    },
    {
        id: '4',
        position: { x: 350, y: 120 },
        data: {
            "id": 4,
            "nombre": "MySQL",
            "resumen": "Utilizado para bases de datos relacionales.",
            "codigoBarras": "codigo de barras",
            "codigoQR": "/src/assets/img/QR/SVG/SQLLogo.svg ",
            "serial": 321316,
            "handleDirection": "left"
        },
        type: 'hijoLengNodoModel',
    },
    {
        id: '5',
        position: { x: 350, y: -150 },
        data: {
            "id": 5,
            "nombre": "MongoDB",
            "resumen": "Utilizado para bases de datos no relacionales.",
            "codigoBarras": "codigo de barras",
            "codigoQR": "/src/assets/img/QR/SVG/mongoLogo.svg",
            "serial": 321316,
            "handleDirection": "left"
        },
        type: 'hijoLengNodoModel',
    },
    {
        id: '6',
        position: { x: -285, y: -400 },
        data: {
            "id": 6,
            "nombre": "Python",
            "resumen": "Utilizado para crear aplicaciones web y API.",
            "codigoBarras": "codigo de barras",
            "codigoQR": "/src/assets/img/QR/SVG/pythonLogo.svg",
            "serial": 321316,
            "handleDirection": "bottom"
        },
        type: 'hijoLengNodoModel',
    },
    {
        id: '7',
        position: { x: 1185, y: -13 },
        data: {
            "id": 7,
            "nombre": "Tailwind CSS",
            "resumen": "Utilizado para estilar nuestra maquetación web",
            "codigoBarras": "codigo de barras",
            "codigoQR": "/src/assets/img/QR/SVG/tailwindLogo.svg",
            "serial": 321316,
            "handleDirection": "left"
        },
        type: 'hijoLengNodoModel',
    },
    {
        id: '8',
        position: { x: -1720, y: -13 },
        data: {
            "id": 8,
            "nombre": "Bootstrap CSS",
            "resumen": "Utilizado para estilar nuestra maquetación web",
            "codigoBarras": "codigo de barras",
            "codigoQR": "/src/assets/img/QR/SVG/bootstrapLogo.svg",
            "serial": 321316,
            "handleDirection": "right"
        },
        type: 'hijoLengNodoModel',
    },
    {
        id: '9',
        position: { x: -285, y: 380 },
        data: {
            "id": 9,
            "nombre": "Flutter",
            "resumen": "Utilizado para estilar la maquetación y funcionalidad de app's mobiles.",
            "codigoBarras": "codigo de barras",
            "codigoQR": "/src/assets/img/QR/SVG/flutterLogo.svg",
            "serial": 321316,
            "handleDirection": "top"
        },
        type: 'hijoLengNodoModel',
    },
]

export default LengNodoData;