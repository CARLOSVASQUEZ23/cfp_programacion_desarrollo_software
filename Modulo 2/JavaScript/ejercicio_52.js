let matriz = [
    [5,4,6,10],
    [5,6,7,8],
    [9,10,10,10]
]

let promedio=[];

let resultado = 0;

for (let i = 0; i < 4; i++) {
    resultado = 0;
    for (let j = 0; j < 3; j++) {
        resultado += matriz[j][i];                
    }
    promedio[i] = resultado/3;    
}

console.log(promedio);