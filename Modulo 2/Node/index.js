// let nombre = "Carlos"
// console.log(nombre);


let {suma:funcionSumar, resta:funcionResta, division:funcionDivision, multiplicacion:funcionMulti} = require('./calculate.js');

/*console.log(resta(15,15));
console.log(suma(15,15));
console.log(division(15,15));
console.log(multiplicacion(15,15));*/

console.log(funcionSumar(5,5));
console.log(funcionResta(5,5));
console.log(funcionDivision(5,5));
console.log(funcionMulti(5,5));


console.log(globalThis);


