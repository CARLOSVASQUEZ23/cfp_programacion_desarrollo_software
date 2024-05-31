//Frijoles


// let contarCaracter = (frase) => {
//     let contador = 0;
//     for (i = 0; i < frase.length; i++) {
//         console.log(frase[i]);
//         if (frase[i] === "B"){
//             contador++
//         }
//     }
//     return contador
// }


let contarBs = (frase) =>{
    let contador = 0;
    for( i = 0; i < frase.length; i++) frase[i] === "B" ? contador++: 0;
    return contador
}

let contarCaracter = (frase, tuLetra) =>{
    let contador = 0;
    for( i = 0; i < frase.length; i++) frase[i] === tuLetra ? contador++: 0;
    return contador
}


console.log(contarCaracter("mi mama me mima", "m"));




