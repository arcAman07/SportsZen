const express = require("express");

const router = express.Router();

const userLoginController = require("../controllers/userLoginController");

// Post Request to store user Details

router.get("/login", userLoginController.authenticateUser);

module.exports = router;
