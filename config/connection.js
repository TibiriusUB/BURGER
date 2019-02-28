// Set up MySQL connection  dotenv protection is used with DB info. (may not deploy!)
var mysql = require("mysql");
//require("dotenv").config();

var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    DB_host=localhost,
    host: localhost,
    user: root,
    password: root,
    database: burgers_db
  });
};
  connection.connect(function (err) {
    if (err) {
      console.error("ERROR CONNECTING!:\n " + err.stack);
      return;
    }
    console.log("Grill id: " + connection.threadId);
  });

  // export connection 
  module.exports = connection;
