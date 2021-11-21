require("dotenv").config();
const User = require("../models/user");

exports.patchUser = (req, res, next) => {
  User.updateOne({ _id: req.params.id }, { $set: req.body }, (err) => {
    if (!err) {
      console.log("User details updated successfully");
      res.send("Successfully updated the user details");
      res.sendStatus(200);
    } else {
      console.log(err);
      res.send(err);
    }
  });
};
