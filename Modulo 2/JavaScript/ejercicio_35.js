/*Impresión de Caracteres: Con un bucle PARA, imprimir un carácter (por ejemplo,
    '*') 5 veces en una misma línea.*/





let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let num = conseguirRandom(1,5)
console.log(num);

let caracter = "*";

for (let i = 0; i < num; i++) {
    console.log(caracter);
    caracter+="*"
}
    