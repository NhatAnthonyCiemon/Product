const { Sequelize } = require('sequelize');

// Cấu hình kết nối với cơ sở dữ liệu database-user-password
const sequelize = new Sequelize('freedb_productBTV', 'freedb_productBTVN', 'w5RXf#XsmdQ#XC4', {
  host: 'sql.freedb.tech',
  dialect: 'mysql', // Hoặc 'postgres', 'sqlite', 'mssql' tùy thuộc vào cơ sở dữ liệu bạn đang sử dụng
});

module.exports = sequelize;