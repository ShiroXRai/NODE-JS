const db = require("./config");

const sql = "CREATE DATABASE temancoding";
db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Database created");
});