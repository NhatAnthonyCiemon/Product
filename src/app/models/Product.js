const db = require("../../config/db");
const products = [
    { name:"Microsoft Surface Pro 1",cost:"1.000.000 VND",image:"./images/laptop.jpeg"},
    { name:"Microsoft Surface Pro 2",cost:"2.000.000 VND",image:"./images/laptop.jpeg"},
    { name:"Microsoft Surface Pro 3",cost:"3.000.000 VND",image:"./images/laptop.jpeg"},
    { name:"Microsoft Surface Pro 4",cost:"4.000.000 VND",image:"./images/laptop.jpeg"},
    { name:"Microsoft Surface Pro 5",cost:"5.000.000 VND",image:"./images/laptop.jpeg"},
    { name:"Microsoft Surface Pro 6",cost:"6.000.000 VND",image:"./images/laptop.jpeg"},
];
const Product = {
    index: async (object) => {
        //truy cập dữ liệu từ database(ORM)
        db.query("SELECT * FROM products", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
    },
    detail: async (object) => {
        //truy cập dữ liệu từ database
    },
};

module.exports = {Product, products};
