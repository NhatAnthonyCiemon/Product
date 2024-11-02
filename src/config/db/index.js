const mysql = require("mysql2");

const config = {
    host: "sql.freedb.tech",
    user: "freedb_productBTVN",
    password: "w5RXf#XsmdQ#XC4",
    database: "freedb_productBTV",
};

const connect = mysql.createConnection(config);

module.exports = connect;
