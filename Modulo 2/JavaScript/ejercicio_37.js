/*Suma de Números Pares: Utilizando un bucle PARA, sumar los números pares del
2 al 20 e imprimir el resultado.
*/


let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let num = conseguirRandom(1,10)
console.log(num);

let suma=0;
for (let i = 0;  i<= num; i+=2) {
    suma+=i;
}

console.log(suma);