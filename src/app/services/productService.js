const product = require('../models/product1')


async function getProducts() {
   
    const result = await product.findAll();
    const products = [];
    result.forEach(item => {
        let { id, name, cost, image } = item;
        cost = cost.toLocaleString("vi", { style: "currency", currency: "VND" });
        products.push({ id, name, cost, image });
    });
    return products;
}



module.exports = {getProducts};