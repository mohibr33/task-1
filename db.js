// db.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "contact",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:");
    return;
  }
  console.log("Connected to the MySQL database");
});

module.exports = connection;
