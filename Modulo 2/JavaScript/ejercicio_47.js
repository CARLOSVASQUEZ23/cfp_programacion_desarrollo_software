let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let array = [];
let user_num = conseguirRandom(1,10)
console.log(user_num);
let contador = 0;

for( i = 0; i <= 10; i++){
    array[i] = conseguirRandom(1,10)
    if (user_num === array[i]){
        contador +=1
    }
}
console.log(`El nuemro ${user_num} aparece ${contador} veces`);
console.log(array);