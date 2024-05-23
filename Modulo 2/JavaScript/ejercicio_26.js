let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


let num = conseguirRandom(-50,50);
let suma = 0;

while (num > 0){
    num = conseguirRandom(-50,50);
    console.log(num) 
    suma += 1
}
console.log("El numero negativo que la maquina dió fue: " + num);
console.log("Intentos de la maquina en dar un numero negativo: " + suma);