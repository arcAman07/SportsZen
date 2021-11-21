const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: { type: "string", required: true, unique: true },
  productDate: { type: "string", required: true },
  productPrice: { type: "string" },
  purchased: { type: "string" },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
