let min = (a, b, c) =>{
    if(a < b && a < c){
        console.log("El menor es: " + a)
    }
    else if(b < a && b < c){
        console.log("El menor es: " + b)
    }
    else if(c < b && c < a){
        console.log("El menor es: " + c)
    }else{
        console.log("todos los numeros son iguales")
    }
}
min(555, 85, 899)
