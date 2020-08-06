// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "c584md9egjnm02sk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "wx16gsb2y7s4zvy0",
  password: "kits34n6qmwladja",
  database: "rppxlx9uiuzr84jd"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
