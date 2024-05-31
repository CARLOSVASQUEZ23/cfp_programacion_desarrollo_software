let filas = 8;
let columnas = 8;
let tablero = "";

for(f = 1; f <= filas; f++){
    for(c = 1; c <= columnas; c++){
        if((f + c)%2==0){
            tablero += "#"
        }else{
            tablero += "*"
        }
    }
    tablero += "\n"   
}

console.log(tablero)
