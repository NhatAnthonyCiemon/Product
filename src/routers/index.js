const ProductRouter = require("./product");
const SignupRouter = require("./signup.js");
const LoginRouter = require("./login");

function route(app) {
    app.use("/login", LoginRouter);
    app.use("/signup", SignupRouter);
    app.use("/", ProductRouter);
}

module.exports = route;
