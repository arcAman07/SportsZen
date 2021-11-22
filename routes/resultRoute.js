const express = require("express");

const router = express.Router();

router.get("/product/result", (req, res, next) => {
  res.send("Your purchase was successful");
});

module.exports = router;
