// models/contactModel.js
const db=require("../db");

const addContact = (contactData, callback) => {
  const { name, email, message } = contactData;
  const query = `INSERT INTO form (name, email, message) VALUES (?, ?, ?)`;
  
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

module.exports = {
  addContact,
};
