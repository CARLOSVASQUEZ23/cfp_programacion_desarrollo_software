/*Contador de Dígitos: Solicitar al usuario un número y utilizar un bucle PARA para
contar la cantidad de dígitos en ese número.*/

let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let num = conseguirRandom(1,10000)
console.log(num);

let cadena = num.toString()
console.log(cadena);

/*let digitos = cadena.length
console.log(digitos);*/

for(i = 0; i <= cadena.length; i++){
    console.log("La cantidad de digitos en: " + num + " es de: "+ i);
}





