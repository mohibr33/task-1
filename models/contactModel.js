const connection = require("../db");

class Contact {
  constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
  }
  check() {
    if (!this.name || !this.email || !this.message) {
      throw new Error("All fields are required.");
    }
  }
}
const addContact = (contactData, callback) => {
  const contact = new Contact(contactData.name, contactData.email, contactData.message); //instance
  
  try {
    contact.check();  
  } catch (error) {
    return callback(error, null); 
  }
  const query = `INSERT INTO form (name, email, message) VALUES (?, ?, ?)`;
    connection.query(query, [contact.name, contact.email, contact.message], (err, result) => {
    if (err) {
      return callback(err, null); 
    }
    callback(null, result); 
  });
};

module.exports = {
  addContact,
};
