const db = require("../../config/db");

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

module.exports = Product;
