const {products} = require("../models/Product");

const productListController = {
    index(req, res) {
        res.render("productList", { title: "Product List",productList: true ,products});
    },
    showDetail(req, res) {
        const {id} = req.params;
        console.log(id);
        //const product = products.find(product => product.id === id);
        res.render("productDetail", {title: "Product List", id});
    }
};

module.exports =productListController;