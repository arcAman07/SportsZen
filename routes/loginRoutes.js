const express = require("express");

const router = express.Router();

const userLoginController = require("../controllers/userLoginController");

// Post Request to store user Details

router.post("/login", userLoginController.authenticateUser);

router.get("/login", userLoginController.getLoginTemplate);

module.exports = router;
