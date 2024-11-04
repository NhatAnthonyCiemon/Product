const Signup = require("../models/Signup");

const SignupController = {
    index(req, res) {
        //sử dụng hàm trong object Product để lấy dữ liệu từ database
        res.render("signup", { style: "signup.css" });
    },
    create: async (req, res) => {
        const { name, email, password } = req.body;
        const user = { name, email, password };
        try {
            const result = await Signup.create(user);
            if (!result) {
                console.log("Error");
                res.status(400).json({ error: "Error" });
                return;
            }
            console.log("Success");
            res.status(201).json({ error: null });
        } catch (err) {
            res.status(400).json({ error: err });
        }
    },
};

module.exports = SignupController;
