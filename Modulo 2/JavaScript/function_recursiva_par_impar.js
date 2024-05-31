 let min = (a, b, c) =>{
    if ( a < b && a < c){
        console.log(a);
    } else if (b < a && b < c){
        console.log(b);
    } else if(c < a && c < b){
        console.log(c);
    } else{
        console.log("hay dos numeros iguales o todos son iguales");
    }
 }
 
 //------------------------------------------------------------//

function isEven(numero){

    if(numero ==0){
         return true
     }
     else if(numero ==1){
         return false
     }
     else{
         return isEven(numero < 0 ? numero + 2 : numero-2)
     }
 }
 
 console.log(isEven(-5)); 



 //------------------------------------------------------------//




