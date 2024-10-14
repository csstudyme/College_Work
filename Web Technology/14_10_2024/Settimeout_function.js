//  For delay something

const message = function(){
    console.log("Hello World")
}
setTimeout(message , 5000);

setTimeout( () => {
    console.log("Calling from arrow function")
}, 8000)