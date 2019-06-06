const mysql = require('mysql');
const keys = require("../keys.js");
require("dotenv").config();

const sqlUser = keys.mysql.user
const sqlPassword = keys.mysql.password


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Cs343233!',
    database: 'tacos_db'

});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;