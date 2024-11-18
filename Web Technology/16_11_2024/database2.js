var mysql = require('mysql')
var con = mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'students4'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the database!");

    // SQL query to create a table
    const sql = `CREATE TABLE students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        address VARCHAR(255),
        course VARCHAR(20),
        contact BIGINT
    )`;

    // Execute the query
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table created...");
    });
});
