const db = require("../../config/db");

async function getProducts() {
    try {
        const [result] = await db.query("SELECT id, name, cost, image FROM Product");
        const products = result.map(item => {
            let { id, name, cost, image } = item;
            cost = cost.toLocaleString("vi", { style: "currency", currency: "VND" });
            return { id, name, cost, image };
        });
        return products;
    } catch (err) {
        console.error("Lỗi khi truy vấn sản phẩm:", err);
        throw err;
    }
}

// Hàm lấy sản phẩm theo id
async function getProductById(id) {
    try {
        const [result] = await db.query("SELECT id, name, cost, image FROM Product WHERE id = ?", [id]);
        console.log(result);
        if (result.length === 0) {
            return null; // Không tìm thấy sản phẩm
        }
        let { name, cost, image } = result[0];
        cost = cost.toLocaleString("vi", { style: "currency", currency: "VND" });
        return { id, name, cost, image };
    } catch (err) {
        console.error("Lỗi khi truy vấn sản phẩm theo ID:", err);
        throw err;
    }
}

module.exports = { getProducts, getProductById };
