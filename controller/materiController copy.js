const materi = require("../models/materi");
const db = require("../config");
const controller = {};

controller.get = async function (req, res) {
  const sql = `select * from materi`;

  db.query(sql, function (err, rows) {
    if (err) {
      // req.flash('error', err)
      res.render("index", { data: "" });
    } else {
      res.render("index", {
        data: rows,
        layout: "partials/main",
        title: "Halaman Home",
        nama: "Temancoding",
      });
    }
  });
};
controller.tambahDataStatis = async function (req, res) {
  const sql = `INSERT INTO materi (judul, narsum) 
        VALUES ('desain', 'alif dan iqbal')`;

  db.query(sql, function (err, rows) {
    if (err) {
      // req.flash('error', err)
      console.log(err);
    } else {
      res.send("Data berhasil ditambahkan");
    }
  });
};
controller.post = async function (req, res) {
  // console.log(req.body);
  const sql =
    "INSERT INTO materi (judul,narsum) VALUES ('" +
    req.body.judul +
    "','" +
    req.body.narsum +
    "')";
  db.query(sql, function (err, result, rows) {
    if (err) {
      // req.flash('error', err)
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
};

controller.put = async function (req, res) {
  const sql =
    "UPDATE materi SET judul = '" +
    req.body.judul +
    "', narsum = '" +
    req.body.narsum +
    "' WHERE id='" +
    req.body.id +
    "'";

  db.query(sql, function (err, result, rows) {
    if (err) {
      // req.flash('error', err)
      console.log(err);
    } else {
      res.redirect(`/materi/${req.body.id}`);
    }
  });
};

controller.delete = async function (req, res) {
  const sql = "DELETE FROM materi WHERE id='" + req.params.id + "'";
  db.query(sql, function (err, result, rows) {
    if (err) {
      // req.flash('error', err)
      console.log(err);
    } else {
      res.json({ redirect: "/" });
    }
  });
};

controller.detail = async function (req, res) {
  const sql = `select * from materi WHERE id=${req.params.id}`;

  db.query(sql, function (err, rows) {
    if (err) {
      // req.flash('error', err)
      res.render("index", { data: "" });
    } else {
      console.log(rows);
      res.render("detail", {
        layout: "partials/main",
        title: "Halaman Materi",
        id: req.params.id,
        data: rows,
      });
    }
  });
};

module.exports = controller;
