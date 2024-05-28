/*Potencias de 2: Usar un bucle PARA para imprimir las primeras 5 potencias de 2
(2^0, 2^1, ..., 2^4).
 */

let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let num = conseguirRandom(1,10)
console.log(num);


for (let i = 0; i < num; i++) {
    console.log(`${num} potencia ${i} = ${Math.pow(num,i)}`);  
}

