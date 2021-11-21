const express = require("express");

const router = express.Router();

router.get("/product/purchase", (req, res, next) => {
  res.render("Purchased.ejs");
});

module.exports = router;
