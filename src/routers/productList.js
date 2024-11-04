const express = require("express");
const router = express.Router();
const productListController = require("../app/controllers/productListController");

router.use("/",productListController.index);

module.exports = router;