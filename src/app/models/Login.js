const db = require("../../config/db");

const Login = {
    login: async (object) => {
        //truy cập dữ liệu từ database

        try {
            const [[result]] = await db.query(
                `SELECT * FROM users WHERE email = ? AND user_password = ?`,
                [object.email, object.password]
            );
            if (!result) {
                return false;
            }
            return result.name;
        } catch (err) {
            return false;
        }
    },
};

module.exports = Login;
