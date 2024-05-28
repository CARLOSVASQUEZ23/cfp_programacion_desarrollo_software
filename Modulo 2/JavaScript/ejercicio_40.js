/* Patrón Numérico: Imprimir un patrón numérico ascendente con un bucle PARA. Por
ejemplo: 1, 12, 123, 1234 */

let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let num = conseguirRandom(1,10)
console.log(num);

let numero = "";

for (let i = 1; i <= num; i++) {

    numero += i.toString();
    console.log(numero);
}
