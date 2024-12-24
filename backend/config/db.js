const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "books"
})

module.exports = db
