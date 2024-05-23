let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


let num = conseguirRandom(1,150)
let contrasenia = 13;
let suma = 0;

while (num != contrasenia){
    num = conseguirRandom(1,25)
    console.log(num);
    console.log(contrasenia);
    suma += 1
}
if(suma >= 10){
    console.log("Usuario bloqueado " + suma + " Intentos fallidos");
} else{
    console.log("Bienvenido usuario");
}
