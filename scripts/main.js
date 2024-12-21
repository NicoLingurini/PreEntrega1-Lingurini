const mercaderia = [
    { id: 1, nombre: "Plato", stock: 40, precio: 7000 },
    { id: 2, nombre: "Tenedor", stock: 30, precio: 2500 },
    { id: 3, nombre: "Cuchillo", stock: 30, precio: 2500 },
    { id: 4, nombre: "Cuchara", stock: 30, precio: 2500 },
    { id: 5, nombre: "Vaso", stock: 10, precio: 6000 },
    { id: 6, nombre: "Copa", stock: 20, precio: 9000 },
    { id: 7, nombre: "Jarra", stock: 0, precio: 15000 }
]
mercaderia.forEach((producto) => {
    if (producto.stock != "") {
        console.log(`Producto en Stock (${producto.nombre})`)
    } else {
        console.log(`Producto sin Stock (${producto.nombre})`)
    }
})

let cantidadMinima = 15;

mercaderia.forEach((producto) => {
    if (producto.stock >= cantidadMinima) {
        console.log(`Hay suficiente mercaderia disponible: ${producto.nombre}`);
    } else {
        console.log(`No hay suficiente mercaderia disponible: ${producto.nombre}`);
    }
})

function agregarStock(articulo, cantidad) {
    let item = mercaderia.find(item => item.nombre === articulo);
    if (item) {
        item.stock += cantidad;
        console.log(`Se han agregado ${cantidad} unidades de ${articulo}. Nuevo stock: ${item.stock}`);
    } else {
        console.log(`El artículo ${articulo} no se encontró en el bazar.`);
    }
}

function quitarStock(articulo, cantidad) {
    let item = mercaderia.find(item => item.nombre === articulo);
    if (item) {
        if (item.stock >= cantidad) {
            item.stock -= cantidad;
            console.log(`Se han quitado ${cantidad} unidades de ${articulo}. Nuevo stock: ${item.stock}`);
        } else {
            console.log(`No hay suficiente stock de ${articulo}. Disponible: ${item.stock}`);
        }
    } else {
        console.log(`El artículo ${articulo} no se encontró en el bazar.`);
    }
}


function venderProducto(nombre, cantidad) {
    let item = mercaderia.find(item => item.nombre === nombre);
    if (item) {
        if (item.stock >= cantidad) {
            item.stock -= cantidad;
            console.log(`Venta realizada: ${cantidad} unidades de ${nombre}. Stock restante: ${item.stock}`);
            return item.precio * cantidad;
        } else {
            console.log(`No hay suficiente stock de ${nombre}. Disponible: ${item.stock}, Solicitado: ${cantidad}`);
            return 0;
        }
    }
}

function calcularTotalVentas(ventas) {
    let total = ventas.reduce((suma, venta) => suma + venta, 0);
    return total.toFixed(2);
}




agregarStock("Vaso", 30)
agregarStock("Destapador", 10)
agregarStock("Jarra", 10)
quitarStock("Tenedor", 5)
quitarStock("Plato", 10)
quitarStock("Frasco", 30)


let ventas = [];
ventas.push(venderProducto("Plato", 10));
ventas.push(venderProducto("Vaso", 20));

let totalFinal = calcularTotalVentas(ventas);
console.log(`El valor total de las ventas es: $${totalFinal}`);

const nombres = mercaderia.map((objeto) => {
    return {
        id: objeto.id,
        nombre: objeto.nombre,
        stock: objeto.stock,
        precio: objeto.precio
    }
})
console.log(nombres)

