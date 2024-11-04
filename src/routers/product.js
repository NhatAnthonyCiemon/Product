const express = require("express");
const router = express.Router();
const productController = require("../app/controllers/ProductController");

router.use("/logout", productController.destroy);
router.use("/", productController.index);
router.use("/:id", productController.detail);

module.exports = router;
