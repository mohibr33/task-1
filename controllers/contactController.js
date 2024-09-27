const contactModel= require("../models/contactModel");

const addContact = (req, res) => {
  const contactData = req.body;

  contactModel.addContact(contactData, (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    res.status(200).json({
      message: "User has been added successfully!",
      id: result.insertId, 
    });
  });
};

module.exports = {
  addContact,
};
