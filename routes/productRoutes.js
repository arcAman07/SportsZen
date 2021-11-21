const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

const patchProductController = require("../controllers/patchProductController");

const deleteProductController = require("../controllers/deleteProductController");

// Post Request to store user Details

router.post("/admin/product", productController.postProduct);

router.get("/admin/product", productController.getProductTemplate);

router.get("/admin/product/:id", productController.getProduct);

router.patch("/admin/product/:id", patchProductController.patchProduct);

router.delete("/admin/product/:id", deleteProductController.deleteProduct);

module.exports = router;
