// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/submitcontactform", contactController.addContact);
router.get("/submission/:id",contactController.getcontact);


module.exports = router;
