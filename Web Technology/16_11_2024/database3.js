
var mysql = require('mysql')
var con = mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'students4'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected...");

    // SQL query to insert a record into the student1 table
    const sql2 = `INSERT INTO students (id, name, address, course, contact) 
                  VALUES ('1', 'Ajay', 'Mumbai', 'MCA', '1234567890')
                  VALUES ('2', 'Suda', 'Mumbai', 'BCA', '8765437643')`;



    // Execute the query
    con.query(sql2, function(err, result) {
        if (err) throw err;
        console.log("Record inserted...");
    });
});