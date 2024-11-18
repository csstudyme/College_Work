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

sql = `UPDATE conference_data SET name= 'Datta' WHERE name = 'Mira'`;
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Updated Succesfully")
        con.end();
    });

});