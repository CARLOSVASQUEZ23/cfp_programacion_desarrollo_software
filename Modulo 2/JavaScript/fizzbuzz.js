let numero = 0;
numero = 100;

for (i= 1; i <= numero; i++ ){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    }else if (i % 3 == 0){
        console.log("Fizz")
    }
    else if(i % 5 == 0){
        console.log("Buzz")
    } 
    else{
        console.log(i);
    }
}