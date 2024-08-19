//Dias es que se regará
let k = 5;


//Las flores que se regaran del jardin
let v = 3;


//Mi jardin: cada número es una flor y su altura es dependiendo la cantidad del número
let jardin = [2, 3, 10, 15];
console.log(jardin); 


//Recorro mi jardin y le aumneto 1 según los dias pero cierta cantidad de flores que será dependiendo de v.
var menor = jardin[0];
for (var i = 1; i < jardin.length; i++) {
    if (jardin[i] < menor) {
        menor = jardin[i];
    }
}
console.log("La flor menor: " + menor + "cm" + " Creció hasta " + menor + k + "cm");