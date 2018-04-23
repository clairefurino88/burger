
var mysql = require("mysql");
var connection;

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//exporting to orm.js
module.exports = connection;