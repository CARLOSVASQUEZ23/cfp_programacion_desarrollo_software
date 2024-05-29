let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let array = [];
let promedio = 0;

let suma = 0;

for( i = 0; i <= 10; i++){
    array[i] = conseguirRandom(1,10)
    console.log(array);
    if(array[i] % 2 === 0){
        suma = suma + array[i]
    }
}
console.log("La suma de los pares en el array es: " + suma);