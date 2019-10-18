const orm = require("../config/orm");

const burger = {
    selectAll: callback => {
        orm.selectAll("burgers", function (res) {
            callback(res);
        })
    },
    insertOne: (cols, vals, callback) => {
        orm.insertOne("burgers", cols, vals, function (res) {
            callback(res);
        });
    },
    updateOne: (colsValsObj, condition, callback) => {
        orm.updateOne("burgers", colsValsObj, condition, function (res) {
            callback(res);
        });
    }
}

module.exports = burger;