let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
//console.log(conseguirRandom(-5,10));


// let num = conseguirRandom(-5, 5);
// console.log(num);


let num = conseguirRandom(-5,5)
let suma = 0;
while(num > 0){
    suma += num
    console.log(num)
    num = conseguirRandom(-5,6)
    console.log(num)
}
console.log(suma);



// Repetir
// Escribir "Ingresa nuevamente un número"
// Leer segunda
// Escribir "La suma total fue de: " cantidad
// cantidad <- segunda + cantidad
// Hasta Que segunda < 0



