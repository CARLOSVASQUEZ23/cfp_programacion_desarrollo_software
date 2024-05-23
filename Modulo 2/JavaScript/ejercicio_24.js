let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


let num = conseguirRandom(1,10)
let num2 = conseguirRandom(1,10)

let suma = 0;

while (num != num2){
    num = conseguirRandom(1,100)
    console.log(num);
    num2 = conseguirRandom(1,100)
    console.log(num2);
    suma += 1
}
console.log("Adivinaste el número");
console.log("La máquina lo adivino en " + suma + " Intentos");
