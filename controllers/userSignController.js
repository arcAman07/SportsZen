require("dotenv").config();
var bcrypt = require("bcryptjs");
const User = require("../models/user");
const saltRounds = process.env.SALT;

exports.postUser = (req, res, next) => {
  const password = req.body.password;
  bcrypt.genSalt(parseInt(saltRounds), (err, salt) => {
    bcrypt.hash(req.body.password, salt, (error, hash) => {
      if (!error) {
        const newUser = new User({
          email: req.body.email,
          password: hash,
          confirmPassword: password,
        });
        newUser.save((err) => {
          if (err) {
            console.log(err);
            res.send(err);
          } else {
            console.log("Successfully added the new user");
            res.render("items.ejs");
          }
        });
      } else {
        console.log(error);
        res.send(error);
      }
    });
  });
};

exports.getSignTemplate = (req, res, next) => {
  res.render("signUp.ejs");
};

exports.getAllUsers = (req, res, next) => {
  User.find((err, results) => {
    if (!err) {
      res.send(results);
    } else {
      console.log(err);
      res.send(err);
    }
  });
};

exports.getUser = (req, res, next) => {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (!err) {
      res.send(user);
      res.sendStatus(200);
    } else {
      console.log(err);
      console.log(user);
    }
  });
};
