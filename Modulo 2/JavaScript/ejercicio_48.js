let categorias = ["A", "B", "C" ];
let descuentos = [10, 5, 0]

let precios = [500, 100, 250];

let total = 0;
for( i = 0; i <= 3; i++){
    total = descuentos[i] * precios[i]
    console.log(`La categoria ${categorias[i]} tienen descuento de ${descuentos[i]} en el producto ${precios[i]} total a pagar: ${precios[i] - total / 100}`);
}


