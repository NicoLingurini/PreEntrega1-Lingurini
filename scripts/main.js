let mercaderia = "vaso" 

if (mercaderia == "") {
    console.log ("Producto inexistente")
} else {
    console.log ("Producto en stock")
}

let cubiertos = 25;
let cantidadMinima = 50;

for (let i = 0; i < 1; i++) {
    if (cubiertos >= cantidadMinima) {
        console.log(`Hay suficientes cubiertos. Disponible: ${cubiertos}`);
    } else {
        console.log(`No hay suficientes cubiertos. Disponible: ${cubiertos}`);
    }
}

let articuloIngresado;

do {
    articuloIngresado = prompt("Ingrese un artículo del bazar:");
    
    if (articuloIngresado) {
        console.log(`Ha ingresado el artículo: ${articuloIngresado}`);
    }
} while (!articuloIngresado); 


