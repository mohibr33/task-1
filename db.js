const mysql = require("mysql2");
require("dotenv").config({ path: './log.env' }); // Specify the path to your custom env file

const connection = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST || "localhost",  // Use environment variable or default to localhost
  user: process.env.MYSQL_ADDON_USER || "root",        // Use environment variable or default to root
  password: process.env.MYSQL_ADDON_PASSWORD || "",     // Use environment variable or empty for no password
  database: process.env.MYSQL_ADDON_DB || "contact",    // Use environment variable or default to contact
  port: process.env.MYSQL_ADDON_PORT || 3306,           // Use environment variable or default to 3306
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database");
});

module.exports = connection;
