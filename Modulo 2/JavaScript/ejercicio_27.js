let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


let num = conseguirRandom(1,50);
intentos = 10;
suma = 0;
suma2 = 0;

while(suma2 != intentos){
    num = conseguirRandom(1,10)
    console.log(num);
    suma += num%2 == 0? num:0;
    suma2++;
}
        
console.log(suma)
console.log(suma2);

