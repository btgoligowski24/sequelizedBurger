const db = require("../models");

module.exports = (app) => {
    app.post("/api/burgers", (req, res) => {
        db.Burger.create(req.body).then(function (newBurger) {
            res.json(newBurger);
        });
    });

    app.put("/api/burgers/:id", (req, res) => {
        db.Burger.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function (updatedBurger) {
            res.json(updatedBurger);
        });
    });
}