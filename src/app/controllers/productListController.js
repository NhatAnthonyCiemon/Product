const { getProducts, getProductById } = require("../models/Product");

const productListController = {
    async index(req, res) {
        const products = await getProducts();
        res.render("productList", { title: "Product List", productList: true, products });
    },
    async showDetail(req, res) {
        const { id } = req.params;
        const product = await getProductById(id); // Lấy sản phẩm theo ID
        
        if (!product) {
            return res.status(404).send("Product not found");
        }
        
        res.render("productDetail", { product });
    }
};

module.exports = productListController;
