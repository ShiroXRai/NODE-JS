const db = require("./config");

const sql = `CREATE TABLE materi 
    (
        id int NOT NULL AUTO_INCREMENT,
        judul VARCHAR(255), 
        narsum VARCHAR(255),
        PRIMARY KEY (id)
    )`;

db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Table created");
});