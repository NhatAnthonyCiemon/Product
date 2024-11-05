const db = require("../../config/db");
const products = [
    { name:"Microsoft Surface Pro 1",cost:"1.000.000 VND",image:"./images/laptop.jpeg", id: 1},
    { name:"Microsoft Surface Pro 2",cost:"2.000.000 VND",image:"./images/laptop.jpeg", id: 2},
    { name:"Microsoft Surface Pro 3",cost:"3.000.000 VND",image:"./images/laptop.jpeg", id: 3},
    { name:"Microsoft Surface Pro 4",cost:"4.000.000 VND",image:"./images/laptop.jpeg", id: 4},
    { name:"Microsoft Surface Pro 5",cost:"5.000.000 VND",image:"./images/laptop.jpeg", id: 5},
    { name:"Microsoft Surface Pro 6",cost:"6.000.000 VND",image:"./images/laptop.jpeg", id: 6},
];
// const products = {
//     index: async () => {
//         try {
            
//             const result = await db.query("SELECT id,name,cost,image FROM Product");
//             if (!result || !result.rows) {
//                 console.error("Không có dữ liệu trả về từ truy vấn");
//                 return [];
//             }
//             // Xử lý kết quả để định dạng lại cost
//             const products = result.rows.map((item) => ({
//                 id: item.id,
//                 name: item.name,
//                 cost: `${item.cost.toLocaleString("vi-VN")} VND`, // Định dạng lại cost với đơn vị tiền tệ
//                 image: item.image,
//             }));

//             return products; // Trả về danh sách sản phẩm đã định dạng
//         } catch (err) {
//             console.error("Lỗi khi truy vấn sản phẩm:", err);
//             throw err; // Quăng lỗi để xử lý bên ngoài nếu cần
//         }
//     },

//     detail: async (object) => {
//         // Truy cập dữ liệu chi tiết từ database
//     },
// };

// Sử dụng hàm Product.index() và in ra kết quả
// products.index()
//     .then((products) => console.log(products))
//     .catch((error) => console.error("Lỗi khi truy vấn sản phẩm:", error));


module.exports = {products};
