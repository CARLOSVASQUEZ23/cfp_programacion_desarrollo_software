let matriz = [
    [1,2,3,4,5],
    [6,7,8,9,0],
    [1,2,3,4,5],
    [6,7,8,9,0]
]

let diagonalPrincipal = 0
let diagonalSecundario = 0;

for (let i = 0; i < 4; i++) {
    diagonalPrincipal += matriz[i][i];
    diagonalSecundario += matriz[i][4-i]; 
    
}

console.log(diagonalPrincipal);
console.log(diagonalSecundario);