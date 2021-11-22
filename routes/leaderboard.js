const express = require("express");

const router = express.Router();

router.get("/product/leaderboard", (req, res, next) => {
  res.render("leaderboard.ejs");
});

module.exports = router;
