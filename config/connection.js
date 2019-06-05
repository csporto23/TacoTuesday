const mysql = require('mysql');

const sqlUser = keys.mysql.user
const sqlPassword = keys.mysql.password


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: sqlUser,
    password: sqlPassword,
    database: ''

});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;