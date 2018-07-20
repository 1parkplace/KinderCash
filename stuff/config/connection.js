// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {

    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    // Set up our connection information
    connection = mysql.createConnection({
        port: 3306,
        host: "o677vxfi8ok6exrd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "sq6vji29as4zey8a",
        password: "zkxonv4c7hf9i0zo",
        database: "gzpd7dwapcp646gx"
    });
}

// Connect to the database
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;

