/*Tabla de Multiplicar: Usar un bucle PARA para mostrar la tabla de multiplicar de un
número ingresado por el usuario hasta 10.*/

let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let num = conseguirRandom(1,10)
console.log(num);

for(i = 0; i <= 10; i++){
console.log(num + " * " + i + " = " + num * i );
}