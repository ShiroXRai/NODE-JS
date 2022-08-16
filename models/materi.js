const Sequelize = require("sequelize");
const db = require("../database/mysql");

const materi = db.define(
  "materi",
  {
    judul: Sequelize.STRING,
    narsum: Sequelize.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = materi;
