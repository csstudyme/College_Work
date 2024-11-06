var http = require('http')
const fs = require('fs')
const { type } = require('os')

var server = http.createServer(function(req,res){

if(req.url=='/'){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<html></head><body>')
    res.write('<h1>It should be the first page of my website</h1>');
    res.write('<p>Time to give some referrel links</p>');
    res.write('<ol><li><a href="/student">student</a></li><li><a href="/college">college</a></li><li><a href="/about">About</a></li></ol></body></html>');
    res.end();
}

else if(req.url=='/student'){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<html></head><body>')
    res.write('<h1>Student</h1>');
    res.write('</body></html>')
    res.end();
}

else if(req.url=='/college'){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<html></head><body>')
    res.write('<h1>Student</h1>');
    res.write('</body></html>')
    res.end();
}
else if(req.url=='/about'){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.write('<html></head><body>')
    res.write('<h1>Student</h1>');
    res.write('</body></html>')
    res.end();
}

else{
    res.end('Invalid request');
    }
    });
    server.listen(8000);
    console.log('Node.js web server at port 9000 is running');