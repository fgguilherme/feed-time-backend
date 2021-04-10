'use strict';
const mysql = require('mysql2');
//local mysql db connection
const dbConn = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123pipoca',
  database : 'feedData'
});

module.exports = dbConn;
