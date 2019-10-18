const mysql = require("mysql");
const credentials = require("../credentials");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection(credentials.mySQL);
}

module.exports = connection;