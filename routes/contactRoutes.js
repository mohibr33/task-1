// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const authController=require("../controllers/authController");
const authenticateToken = require("../middleware/auth");

router.post("/submitcontactform", contactController.addContact);
router.get("/submission/:id",contactController.getcontact);
router.delete("/submission/:id",contactController.getdelete);
router.put("/submission/:id",contactController.updateContact);
router.post('/signup', authController.signup);
router.post('/login', authenticateToken,authController.login);

module.exports = router;
