const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  email: { type: "string", required: true, unique: true },
  password: { type: "string", required: true },
  confirmPassword: { type: "string", required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
