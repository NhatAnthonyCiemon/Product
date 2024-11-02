const Product = require("../models/Product.js");

const ProductController = {
    index(req, res) {
        //sử dụng hàm trong object Product để lấy dữ liệu từ database
        res.render("home");
    },
    detail(req, res) {
        //sử dụng hàm trong object Product để lấy dữ liệu từ database
        res.render("productdetail");
    },
};

module.exports = ProductController;
