var mysql = require('mysql')
var con = mysql.createConnection({
    host:'localhost',
    user : 'root',
    password: ''

});

con.connect(function(err){
    if(err){throw EvalError;}
else{
    console.log("connected");}
    con.query("CREATE DATABASE IF NOT EXISTS CONFERENCE", function(err, result){
        if(err) throw err;
        console.log("Databse Created");
        con.end();
    });
});