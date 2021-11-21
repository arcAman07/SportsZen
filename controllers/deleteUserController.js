require("dotenv").config();
const User = require("../models/user");

exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.id }, (err) => {
    if (!err) {
      console.log("User details deleted successfully");
      res.send("Successfully deleted the user details");
      res.sendStatus(200);
    } else {
      console.log(err);
      res.send(err);
    }
  });
};
