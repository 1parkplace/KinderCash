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
        host: "a5s42n4idx9husyc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        username: "ikh1gzw4tupt1ac8",
        password: "kxh5cam6lc08ce0j",
        database: "ozk8vv6bx6eaqf5q",
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

