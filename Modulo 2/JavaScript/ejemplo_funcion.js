//Ejemplo de funcion

// const square = function (x, y, z){
//     console.log(x, y, z);
// }

// let resultado = square(1, 3, 5);

// console.log(resultado);

//como no se retornando nada en la funcion el resultado esta indefinido.


const makeNoise = function() {
    console.log("¡Pling!");
    };
    makeNoise();
    // → ¡Pling!


//Ejemplo de como funciona un return

const roundTo = function(n){
    if (typeof n != "number"){
        return
    }
    console.log("el tipo de dato es numérico")
}

console.log(roundTo(5   ));



//Reasignar valores de una funcion

let suma = function( x, y ){
    return x + y
}
 console.log(suma( 5, 10 ))

 suma = function(x, y, z){
    return x + y + z
 }

 console.log(suma(5, 10 ,15))



 //Ejemplo de diferente sintaxis de funciones

//  let square = function(x){
//     return x * x
//  } <==== Funcion normal


//  function square(x){
//     return x * x
//  }

//  console.log(square(2)) //<==== Esta es la funcion declarativa.


//FUNCION DE FLECHA

let square = x => {x * x}

console.log(square(10))