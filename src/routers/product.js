const express = require("express");
const router = express.Router();
const productController = require("../app/controllers/ProductController");

router.use("/:id", productController.detail);
router.use("/", productController.index);

module.exports = router;
