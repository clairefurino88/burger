
var mysql = require("mysql");

var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: "burger_db"
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