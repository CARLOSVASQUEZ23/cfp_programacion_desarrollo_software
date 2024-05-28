
/*let array2 = [1,2,3,4]

console.log(Math.min(...array2));*/



let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let array = []
let num = conseguirRandom(1,100)

for (i = 0; i <= 4; i++){
    array[i] = conseguirRandom(1,100)
    console.log(array[i]);
}

console.log(array);
console.log(Math.max(...array));
