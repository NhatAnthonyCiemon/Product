const { destroy } = require("../../config/db/index.js");
const Product = require("../models/Product.js");

const ProductController = {
    index(req, res) {
        //sử dụng hàm trong object Product để lấy dữ liệu từ database
        if (req.session.user) {
            res.render("home", { user: req.session.user });
        } else {
            res.render("home");
        }
    },
    destroy(req, res) {
        req.session.destroy(function (err) {
            res.redirect("/");
        });
    },
    detail(req, res) {
        //sử dụng hàm trong object Product để lấy dữ liệu từ database
        res.render("productdetail");
    },
};

module.exports = ProductController;
