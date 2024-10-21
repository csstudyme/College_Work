const fs = require("node:fs")

//Creating and writing into a file
fs.writeFile("Ajay.txt","Hello, Ajay!",function (err, data) {
    console.log("Writing a file successfully")
})

//
fs.appendFile("Ajay.txt","\nThis is the appended statements.",function (err, data){
    console.log("Appending file succesfully")
})

fs.readFile("Ajay.txt", function(err, data){
    console.log("FIle Read Succesfully")
})

fs.unlink("Ajay.txt", function(err, data){
    console.log("File delete succesfully")
})