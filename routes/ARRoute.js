const express = require("express");

const router = express.Router();

router.get("/product/AR", (req, res, next) => {
  res.render("ARasset");
});

module.exports = router;
