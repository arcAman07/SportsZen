require("dotenv").config();
const Product = require("../models/product");

exports.patchProduct = (req, res, next) => {
  Product.updateOne({ _id: req.params.id }, { $set: req.body }, (err) => {
    if (!err) {
      console.log("User details updated successfully");
      res.send("Successfully updated the user details");
      res.sendStatus(200);
    } else {
      console.log(err);
    }
  });
};
