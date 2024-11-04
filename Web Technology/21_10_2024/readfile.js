const fs = require("fs");
fs.appendFile("_txt.txt","\nHello Everyone \nLet's play again",
    function (err,data){
        console.log("append file");
    }); 