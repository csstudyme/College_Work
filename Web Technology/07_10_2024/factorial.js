const prompt = require("prompt-sync")();
const num = parseInt(prompt('Enter the number : '));

const factorial = function(a){
    var sum =1 ;
    for(i=a; i>0; i--){
        sum = sum *i;
    }
    console.log(sum)
}

factorial(num)


