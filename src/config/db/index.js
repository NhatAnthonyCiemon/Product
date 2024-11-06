const { Sequelize } = require("sequelize");
const mysql2 = require("mysql2");

const sequelize = new Sequelize(
    "freedb_productBTV",
    "freedb_productBTVN",
    "w5RXf#XsmdQ#XC4",
    {
        host: "sql.freedb.tech",
        dialectModule: mysql2, // Địa chỉ host của MySQL
        dialect: "mysql", // Chọn dialect cho MySQL
        logging: false, // Tắt logging SQL (tuỳ chọn)
    }
);
try {
    sequelize
        .authenticate()
        .then(() => {
            console.log("Connection has been established successfully.");
        })
        .catch((error) => {
            console.error("Unable to connect to the database:", error);
        });
} catch (error) {
    console.log(error);
}

module.exports = sequelize;
