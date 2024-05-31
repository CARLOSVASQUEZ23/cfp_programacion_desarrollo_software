let numeroRango = (inicio,final, paso = 0) => {
    let miArray = []
     for(i = 0; i <= final; i++){
         miArray[i] = inicio++;
         if(inicio > final)break;
     }
}

console.log(numeroRango(5,10));


let sumaRango = (miArray) =>{
    suma = 0;
    for(numero of miArray){
        suma += numero
        console.log(suma);
    }

}

sumaRango(numeroRango(5,10))




