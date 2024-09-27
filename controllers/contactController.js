// controllers/contactController.js
const contactModel = require("../models/contactModel");

const addContact = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("Please provide your name, email, and message");
  }


  contactModel.addContact(contactData, (err, result) => {
    if (err) {
      return res.status(500).send("Internal Server Error");
    }

    res.status(200).json({
      message: "User has been added successfully!",
      id: result.insertId,
      name: name,
      email: email,
      message: message,
    });
  });
};

module.exports = {
  addContact,
};
