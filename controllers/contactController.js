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

const getcontact = (req, res) => {
  const { id } = req.params; 

  contactModel.getcontact(id, (err, contact) => {
    if (err) {
      return res.status(404).json("Contact not found");
    }
    return res.status(200).json(contact); 
  });
};
const getdelete=(req,res)=>{
  const {id} =req.params;
  contactModel.getdelete(id,(err,result)=>{
    if(err){
      return res.status(404).json("Contact not found for deletion")
    }
    return res.status(200).json({
      message:"user deleted ",
      result,
    })
  });
};
const updateContact=(req,res)=>{
  const {id}=req.params;
  const contactData=req.body

  contactModel.updateContact(id,contactData,(err,result)=>{
    if(err){
      return res.status(404).json("user not found for updating")
    }
    return res.status(200).json({
      message:"user updated ",
      result,
    })
  });
}
module.exports = {
  addContact,
  getcontact,
  getdelete,
  updateContact,
};
