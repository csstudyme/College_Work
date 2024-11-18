var mysql = require('mysql')
var con = mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'CONFERENCE'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected...");

sql = "select * from conference_data "
    con.query(sql, function(err, result){
        if(err) throw err;

        console.log(result)
        con.end();
    });

});