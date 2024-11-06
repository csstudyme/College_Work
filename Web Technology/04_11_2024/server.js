var http = require('http')
var server = http.createServer(function (req, res){

    res.write("My name is Ajay Panpatil");
    res.end();

})

server.listen(5000);
console.log("what is all of this")