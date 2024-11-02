const ProductRouter = require("./product");

function route(app) {
    app.use("/", ProductRouter);
}

module.exports = route;
