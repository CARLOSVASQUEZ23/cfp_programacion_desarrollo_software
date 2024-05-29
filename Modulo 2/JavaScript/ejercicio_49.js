let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
    
let array = [];

for( i = 0; i <= 10; i++){
    array[i] = conseguirRandom(1,10)
    console.log(array[i]);
    
}


let nuevo = 0;

for (let i = 0; i < array.length ; i++) {
    for (let j = 0; j < array.length ; j++) {
        
        if((array[j] - array[i]) > 0){
            nuevo = array[i];
            array[i] = array[j]
            array[j] = nuevo
        }
    }
}

console.log(array);