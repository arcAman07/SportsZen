require("dotenv").config();
const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();
const PORT = process.env.PORT;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(bodyParser.json())

const signRoutes = require("./routes/signRoutes");
const loginRoutes = require("./routes/loginRoutes");
const productRoutes = require("./routes/productRoutes");
const homeRoute = require("./routes/homeRoute");

// Testing it on local database on Robo-3T

mongoose.connect("mongodb://localhost:27017/sportDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(homeRoute);
app.use(signRoutes);
app.use(loginRoutes);
app.use(productRoutes);

app.listen(PORT, () => console.log("The server is running"));
