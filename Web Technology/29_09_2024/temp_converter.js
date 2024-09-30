const prompt = require("prompt-sync")();

const cf = prompt('Selct Temperature you want to convert (c- Celsius, f- farhanite) : ').charAt(0);

const temp = parseFloat(prompt('Enter the temperature : '));


function cTof(C){
 let F = (((9/5) * C) + 32)

 console.log(F.toFixed(2)+ " °F")
}

function fToc(F){
    let C = (F - 32)*(5/9)
   
    console.log(C.toFixed(2)+  " °C")
   }

   if(cf == "C" || cf == "c"){
    cTof(temp)
   }else if(cf == "F" || cf == "f"){

    fToc(temp)
    
   }else{
    console.log("Select the Right temperature")
   }