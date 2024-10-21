const EventEmitter = require("node:events");

class EvenOdd extends EventEmitter{    
    FindEvenOdd(arrays){
        let even = 0;
        let odd = 0;

        for(let i=0; i<arrays.length; i++){
            if(arrays[i] %2 == 0){
                even += arrays[i]
            }
            else{
                odd += arrays[i]
            }
        }

        this.emit('FindEvenOdd', even , odd);
    }
}

const AddEvenOdd = new EvenOdd();

AddEvenOdd.on('FindEvenOdd', (even, odd) => {
    console.log(`The Even number Addition is ${even} \n The Odd number Addition is ${odd}`);
});


const arr = [2,3,4,5,6,7,8,9];

AddEvenOdd.FindEvenOdd(arr)