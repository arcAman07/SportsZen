require("dotenv").config();
const Product = require("../models/product");

exports.postProduct = (req, res, next) => {
  let currentDate = new Date();
  const newProduct = new Product({
    productName: req.body.productName,
    productDate: currentDate,
    purchased: "false",
    productPrice: req.body.productPrice,
  });
  newProduct.save((err) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log("Successfully added the new product");
      res.render("items.ejs");
    }
  });
};

exports.getAllProducts = (req, res, next) => {
  Product.find((err, results) => {
    if (!err) {
      res.send(results);
      res.sendStatus(200);
    } else {
      console.log(err);
    }
  });
};

exports.getProductTemplate = (req, res, next) => {
  res.render("createasset.ejs");
};

exports.getProduct = (req, res, next) => {
  Product.findOne({ _id: req.params.id }, (err, user) => {
    if (!err) {
      res.send(user);
      res.sendStatus(200);
    } else {
      console.log(err);
      console.log(user);
    }
  });
};
