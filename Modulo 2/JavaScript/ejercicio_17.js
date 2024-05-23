//Categoria de edad

edad_user = 63;

if ((edad_user >= 0) && (edad_user <=12)){
    console.log("Eres un niño")
} else if ((edad_user >= 13) && (edad_user <=17)){
    console.log("Eres un adolescente")
} else if ((edad_user >= 18) && (edad_user <=64)){
    console.log("Eres un adulto")
} else if (edad_user <0){
    console.log("Aun no has nacido") 
} else if (edad_user >140){
    console.log("Ya deberias estar enterrado") 
}

else{
    console.log("Eres un adulto mayor")
}