const { Sequelize } = require("sequelize");
const mysql2 = require("mysql2");

const sequelize = new Sequelize("sql12741852", "sql12741852", "WYEkbSB41E", {
    host: "sql12.freemysqlhosting.net",
    dialectModule: mysql2, // Địa chỉ host của MySQL
    dialect: "mysql", // Chọn dialect cho MySQL
    logging: false, // Tắt logging SQL (tuỳ chọn)
});
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
