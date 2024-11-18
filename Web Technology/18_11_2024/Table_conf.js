var mysql = require('mysql')
var con = mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'CONFERENCE'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the database!");

    // SQL query to create a table
    const sql = `CREATE TABLE conference_data (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        profession VARCHAR(255),
        qualification VARCHAR(50),
        research_title VARCHAR(100),
        organization VARCHAR(100),
        contact BIGINT
    )`;

    // Execute the query
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table created...");
        con.end();
    });
});
