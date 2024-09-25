const prompt = require("prompt-sync")();

const no = prompt('Enter the number ');

temp = no;
let sum = 0;

while(temp > 0){
    let reminder = temp % 10;
    sum = sum + (reminder**no.toString().length);
    temp = parseInt(temp/10);
}

if (no == sum){
    console.log(no+" is armstrong number");
}
else{
    console.log(no+" no is not armstrong");
}