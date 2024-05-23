//Mayor de tres numeros
numero1 = 288;
numero2 = 288;
numero3 = 288;

if ((numero1 > numero2)  && (numero1 > numero3)){
    console.log("El número mayor es: " + numero1)
} else if((numero2 > numero1)  && (numero2 > numero3)){
    console.log("El número mayor es: " + numero2)
} else if((numero3 > numero1)  && (numero3 > numero2)){
    console.log("El número mayor es: " + numero3)
}
else{
    console.log("Todos los números son iguales")
}