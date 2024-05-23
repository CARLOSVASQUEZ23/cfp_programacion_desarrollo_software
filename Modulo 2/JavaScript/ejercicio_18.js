//Categoria de descuento

precio_producto = 150;

pagar = precio_producto * 0.10;
total = precio_producto - pagar

if (precio_producto > 100){
    console.log("El producto tiene un descuento de 10%")
    console.log("Debes pagar: Q" + total)
}
else{
    console.log("No aplica descuento")
}