let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
    
let array = [];

for( i = 0; i <= 10; i++){
    array[i] = conseguirRandom(1,10)
    console.log(array[i]);
}


for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        if(array[i] == array[j]){
            array[j]= true;
        }
    }
}

for (let i = 0; i < array.length; i++) {
    if(array[i] != true){
        console.log(array[i]);
    }
    
}