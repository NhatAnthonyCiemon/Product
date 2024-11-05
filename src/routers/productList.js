const express = require("express");
const router = express.Router();
const productListController = require("../app/controllers/productListController");

router.get("/:id",productListController.showDetail);
router.get("/",productListController.index);


module.exports = router;