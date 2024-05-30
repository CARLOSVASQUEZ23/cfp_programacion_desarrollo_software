let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let mapa = [];
let rudynoe;

//generar numero de minas
let cantidad_minas = conseguirRandom(1,5)
let user_num = conseguirRandom(1,100)

//mostrar el mapa de las minas
for(fila = 0; fila < 5; fila++){
    for(columna = 0; columna < 5; columna++){
        mapa[fila,columna] = "0"
    }
    console.log(mapa);
}

//colocacion de las minas en el mapa

for(let mina = 1; mina < 5; mina++){
    fila_aleatoria = conseguirRandom(1,5)
    columna_aleatoria = conseguirRandom(1,5)
    mapa[fila_aleatoria,columna_aleatoria] = "7"
    console.log(mapa);
}

do {
    user_num = conseguirRandom(1,25)
    console.log(user_num);

    let contador = 0;

    for(fila = 0; fila < 5; fila++){
        for(columna =0; columna < 5; columna++){
            contador += 1
            if(contador == user_num){
                if(mapa[fila,columna] == "7"){
                    rudynoe = true
                } else{
                    mapa[fila,columna] == " "
                }
            }
        }
    }

    for(fila = 0; fila < 5; fila++){
        for(columna = 0; columna < 10; columna++){
        }
        console.log(mapa);
    }
    
    
} while (rudynoe == true);
console.log("!BOOM!");
console.log(user_num);
console.log(cantidad_minas);


