require("dotenv").config();
const Product = require("../models/product");

exports.deleteProduct = (req, res, next) => {
  Product.deleteOne({ _id: req.params.id }, (err) => {
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
