let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let numAdivinar = conseguirRandom(1,50);
let numAdivinar2 = conseguirRandom(1,50);

suma = 0;
do {
    numAdivinar = conseguirRandom(1,50)
    console.log(numAdivinar);
    numAdivinar2 = conseguirRandom(1,50)
    console.log(numAdivinar2);
    suma +=1

} while (numAdivinar != numAdivinar2);
console.log("Numeros de intentos " + suma);