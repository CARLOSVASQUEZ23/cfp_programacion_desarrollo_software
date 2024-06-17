// const array = [[1], [2, 3], [4, 5]];

// const sum = array.reduce((accumulator, currentValue) => {
//     console.log(currentValue);
//     console.log(accumulator);   
//     return accumulator.concat(currentValue)
// });

// console.log(sum); // Resultado: 15 (1 + 2 + 3 + 4 + 5)



for (let i = 0; i < 10; i++) {
    console.log(i);    
}

let bucleLoop = (valor,prueba,actualizacion, cuerpo) =>{
        while(prueba(valor)){
            console.log(valor);
            valor = actualizacion(cuerpo(valor));
        }
        
}


let valor = 0;

function prueba(valor) {
    return valor < 10;
}

function actualizacion(valor) {
    return valor;
}

function cuerpo(valor) {
    valor++
    return valor; 
}


bucleLoop(valor, prueba, actualizacion, cuerpo);


/*
Every
function everyConBucle(arreglo, numero) {
  for (let elemento of arreglo) {
    if (!numero(elemento)) {
      return false;
    }
  }
  return true;
}


let array = [5,5,5, -10]
console.log(everyConBucle(array, (elemento) => elemento > 0));
 */



/*

Some
function everyConBucle(arreglo, numero) {
  for (let elemento of arreglo) {
    if (numero(elemento)) {
      return true;
    }
  }
  return false;
}


let array = [5,5,5, 5]
console.log(everyConBucle(array, (elemento) => elemento > 6)); */
