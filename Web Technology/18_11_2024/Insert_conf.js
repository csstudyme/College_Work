
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

    // SQL query to insert a record into the student1 table
    
        // List of values to be inserted
        const values = [
            [1, 'Ajay', 'Engineer', 'M.Tech', 'AI Research', 'TechCorp', 9876543210],
            [2, 'Suda', 'Professor', 'PhD', 'Data Science', 'UniWorld', 8765432109],
            [3, 'Mira', 'Scientist', 'M.Sc', 'Climate Change', 'GreenOrg', 7654321098],
            [4, 'Ravi', 'Doctor', 'MBBS', 'Cancer Research', 'HealthCare', 6543210987],
            [5, 'Anjali', 'Researcher', 'PhD', 'Quantum Computing', 'FutureTech', 5432109876],
            [6, 'Karan', 'Developer', 'B.Tech', 'Web Security', 'DevSecure', 4321098765],
            [7, 'Priya', 'Data Analyst', 'MCA', 'Big Data', 'DataFirm', 3210987654],
            [8, 'Rohit', 'Manager', 'MBA', 'Project Management', 'BizCorp', 2109876543],
            [9, 'Neha', 'Economist', 'PhD', 'Market Trends', 'EcoThink', 1098765432],
            [10, 'Arjun', 'Designer', 'BFA', 'UX Research', 'DesignStudio', 9876543211]
        ];
    
        // SQL query with placeholders
        const sql = `INSERT INTO conference_data (id, name, profession, qualification, research_title, organization, contact) 
                     VALUES ?`;
    
        // Execute the query with the values array
        con.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log(`${result.affectedRows} records inserted into the conference_data table.`);
            con.end(); // Close the connection
        });
    });
