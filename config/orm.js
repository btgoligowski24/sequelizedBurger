const connection = require("./connection");

function printQuestionMarks(num) {
    let arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(obj) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in obj) {
        var value = obj[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(obj, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

const orm = {
    selectAll: function (table, callback) {
        let queryStr = "SELECT * FROM " + table + ";"
        connection.query(queryStr, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function (table, cols, vals, callback) {
        let queryStr = "INSERT INTO ";

        queryStr += table;
        queryStr += " (";
        queryStr += cols.toString();
        queryStr += ") ";
        queryStr += "VALUES (";
        queryStr += printQuestionMarks(vals.length);
        queryStr += ");";

        console.log(queryStr);

        connection.query(queryStr, vals, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    updateOne: function (table, colsValsObj, condition, callback) {
        let queryStr = "UPDATE ";

        queryStr += table;
        queryStr += " SET ";
        queryStr += objToSql(colsValsObj);
        queryStr += " WHERE ";
        queryStr += condition;

        console.log(queryStr);

        connection.query(queryStr, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
}

module.exports = orm;