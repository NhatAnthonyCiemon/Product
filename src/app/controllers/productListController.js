const {getProducts} = require("../models/Product");

const productListController = {
    async index(req, res) {
        const products = await getProducts();
        res.render("productList", { title: "Product List",productList: true ,products });
    },
    showDetail(req, res) {
        const {id} = req.params;
        console.log(id);
        //const product = products.find(product => product.id === id);
        res.render("productDetail", {title: "Product List", id});
    }
};

module.exports =productListController;