const db = require("../models");

module.exports = (app) => {
    app.get("/", (req, res) => {
        db.Burger.findAll({})
            .then(function (data) {
                const handlebarsObj = {
                    burgers: data
                };
                res.render("index", handlebarsObj);
            });
    });
}