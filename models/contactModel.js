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
//create
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
//read
const getcontact = (id, callback) => {
  const query = `SELECT * FROM form WHERE id = ?`;  
  connection.query(query, [id], (err, result) => { 
    if (err) {
      return callback(err, null);
    }
    if (result.length === 0) {  
      return callback(new Error("Contact not found"), null); 
    }
    callback(null, result[0]); 
  });
};
//delete
const getdelete=(id,callback)=>{
  const query = `DELETE FROM form WHERE id= ?`;
  connection.query(query,[id],(err,result)=>{
    if(err){
      return callback(err,null);
    }
    if(result.affectedRows===0){
      return callback(new Error("Contact not found for deletion",null))
    }
    callback(null,result)
  })
}
const updateContact = (id, contactData, callback) => {
  const contact = new Contact(contactData.name, contactData.email, contactData.message);

  try {
    contact.check();
  } catch (error) {
    return callback(error, null);
  }

  const query = `UPDATE form SET name = ?, email = ?, message = ? WHERE id = ?`;
  connection.query(query, [contact.name, contact.email, contact.message, id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    if (result.affectedRows === 0) {
      return callback(new Error("Contact not found for update"), null);
    }
    callback(null, result);
  });
};
module.exports = {
  addContact,
  getcontact,
  getdelete,
  updateContact,

};
