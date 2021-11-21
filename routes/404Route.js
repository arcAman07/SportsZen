const express = require("express");

const router = express.Router();

router.use(function (req, res, next) {
  res.render("404Error");
});

module.exports = router;
