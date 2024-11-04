const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const route = require("./routers");
const port = 3000;

app.use(express.static("./src/public"));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

route(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
