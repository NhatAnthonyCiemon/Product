const productListRouter = require("./productList");
function route(app) {
    app.use("/", productListRouter);
}

module.exports = route;