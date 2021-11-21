const express = require("express");

const router = express.Router();

router.get("/product", (req, res, next) => {
  res.render("items.ejs");
});

module.exports = router;
