require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const db = require("./models")

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/burger-html-routes")(app);
require("./routes/burger-api-routes")(app);

db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, () => {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});
