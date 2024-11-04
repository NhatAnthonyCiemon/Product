const {products} = require("../models/Product");

const productListController = {
    index(req, res) {
        res.render("productList", { title: "Product List",productList: true ,products});
    }
};

module.exports =productListController;