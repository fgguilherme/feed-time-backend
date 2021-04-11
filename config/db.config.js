'use strict';
const mysql = require('mysql2');
//local mysql db connection
const dbConn = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'feed_data'
});

module.exports = dbConn;
