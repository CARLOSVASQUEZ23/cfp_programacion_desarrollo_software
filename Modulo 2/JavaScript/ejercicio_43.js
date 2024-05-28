let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let array = [];
let promedio = 0;

for( i = 0; i <= 10; i++){
    array[i] = conseguirRandom(1,10)
    console.log(array);
}

console.log("El promedio de los alumnos es: " + array.reduce((a,b) => a+b)/ 10);
