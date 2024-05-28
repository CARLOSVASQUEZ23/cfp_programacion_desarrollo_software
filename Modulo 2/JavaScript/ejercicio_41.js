let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


let array = [];
let suma = 0;

for(i = 0; i <= 3; i++){
    array[i] = conseguirRandom(1,50)
    suma += array[i]
    console.log(array[i]);
}
console.log("La suma de array es de: " + suma);
