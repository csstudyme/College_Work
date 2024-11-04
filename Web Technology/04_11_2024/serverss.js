var http = require('http')
const fs = require('fs')

http.createServer((req,res) => {
    fs.readFile('index.html', (err, data) => {
        if(data){
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        }
    });
}).listen(8000,() =>{
    console.log('Server runnig');
});