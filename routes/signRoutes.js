const express = require("express");

const router = express.Router();

const userSignController = require("../controllers/userSignController");

const patchUserController = require("../controllers/patchUserController");

const deleteUserController = require("../controllers/deleteUserController");

// Post Request to store user Details

router.post("/signUp", userSignController.postUser);

router.get("/signUp", userSignController.getSignTemplate);

router.get("/signUp/:id", userSignController.getUser);

router.patch("/signUp/:id", patchUserController.patchUser);

router.delete("/signUp/:id", deleteUserController.deleteUser);

module.exports = router;
