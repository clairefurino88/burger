
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3307,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
//exporting to orm.js
module.exports = connection;