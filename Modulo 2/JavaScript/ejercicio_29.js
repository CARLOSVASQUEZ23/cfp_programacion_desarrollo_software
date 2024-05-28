let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let num = conseguirRandom(1,6)
factorial = 1;
for(i = 1; i <= num; i++){
    factorial = factorial * i
}
console.log("El factorial de ", num, " es: ", factorial);

// para i = 1 Hasta  numero1 Con Paso 1 Hacer
// factorial <- factorial * i
// FinPara

// Escribir "El factorial de ", numero1, " es: ", factorial