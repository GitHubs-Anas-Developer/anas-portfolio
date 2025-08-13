const express = require("express");
const { SendEmail } = require("../controllers/emailContoller");
const router = express.Router();

router.post("/send-messages", SendEmail);

module.exports = router;
