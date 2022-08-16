const Sequelize = require("sequelize");
const db = new Sequelize("temanCoding", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db;
