const db = require("../../config/db");

const Signup = {
    create: async (object) => {
        //truy cập dữ liệu từ database
        const { name, email, password } = object;
        try {
            const [result] = await db.query(
                `INSERT INTO users (name, email, user_password) VALUES (?, ?, ?)`,
                [name, email, password]
            );
            return true;
        } catch (err) {
            return false;
        }
    },
};

module.exports = Signup;
