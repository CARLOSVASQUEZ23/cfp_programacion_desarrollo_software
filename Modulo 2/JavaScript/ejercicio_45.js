let conseguirRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let user_num = conseguirRandom(1,10)
console.log(user_num);

let array = [];
let existe = false

for( i = 0; i <= 7; i++){
    array[i] = conseguirRandom(1,10)
    console.log(array[i])   
    if(array[i] === user_num) existe = true;{
        if (existe === true){
            console.log("Estoy en el array");
        } else{
            console.log("No estoy en el array");
        }
    }
}

console.log(existe);