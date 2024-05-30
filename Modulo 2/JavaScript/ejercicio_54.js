let matriz = [
    [11,20,33,407],
    [55,6,7,8],
    [9,10,11,102]
]

let maximo;
for (let i = 0; i < 3; i++) {
    let maximo = 0;
    for (let j = 0; j < 4; j++) {
        if (maximo < matriz[i][j]){
            maximo = matriz[i][j]
        }                
    }
    console.log(`En la fila ${i+1} el número maximo es: ${maximo}`);    
}

