const db = require("../../config/db");

async function getProducts() {
    try {
        const [result] = await db.query("SELECT id, name, cost, image FROM Product");
        console.log(result);
        const products = [];
        result.forEach(item => {
            let { id, name, cost, image } = item;
            cost = cost.toLocaleString("vi", { style: "currency", currency: "VND" });
            products.push({ id, name, cost, image });
        });
        console.log(products);
        return products;
    } catch (err) {
        console.error("Lỗi khi truy vấn sản phẩm:", err);
        throw err;
    }
}


const products = {
    index: async () => {   
    },

    detail: async (object) => {
        // Truy cập dữ liệu chi tiết từ database
    },
};

module.exports ={getProducts};
