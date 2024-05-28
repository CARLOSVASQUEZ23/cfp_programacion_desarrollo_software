/*Factorial: Calcular el factorial de un número dado por el usuario utilizando un bucle
PARA.*/

let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let num = conseguirRandom(1,10)
console.log(num);

let factorial = 1;
for(i = 1; i <= num; i++){
    factorial = factorial * i
console.log(factorial);
}

