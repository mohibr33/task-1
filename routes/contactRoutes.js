// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/submitcontactform", contactController.addContact);
router.get("/submission/:id",contactController.getcontact);
router.delete("/deleteContact/:id",contactController.getdelete);
router.put("/updateContact/:id",contactController.updateContact);


module.exports = router;
