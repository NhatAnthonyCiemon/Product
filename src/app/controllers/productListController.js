//const {getProducts} = require("../models/Product");
//const product = require('../models/product1')
 const {getProducts} = require('../services/productService');
const productListController = {
    async index(req, res) {
        //const products = await getProducts();
        //const result = await product.findAll();

        // const products = [];
        // result.forEach(item => {
        //     let { id, name, cost, image } = item;
        //     cost = cost.toLocaleString("vi", { style: "currency", currency: "VND" });
        //     products.push({ id, name, cost, image });
        // });
        let products = [];
        products = await getProducts();

        console.log(products);
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