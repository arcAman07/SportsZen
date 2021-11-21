require("dotenv").config();
const User = require("../models/user");

exports.authenticateUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email }, (err, user) => {
    if (!err) {
      if (user.confirmPassword === password) {
        // res.status(200).json({
        //   message: "User is authenticated",
        //   user: user,
        // });
        res.render("items.ejs");
      } else {
        res.status(401).json({
          message: "Password is incorrect",
        });
      }
      //   res.send(user);
      //   res.sendStatus(200);
    } else {
      res.send("Email is not registered");
      console.log("Email is not registered");
    }
  });
};

exports.getLoginTemplate = (req, res, next) => {
  res.render("login.ejs");
};
