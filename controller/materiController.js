const materi = require("../models/materi");
const db = require("../config");
const controller = {};

controller.get = async function (req, res) {
  try {
    const materiData = await materi.findAll();
    if (materiData.length > 0) {
      res.render("index", {
        data: materiData,
        layout: "partials/main",
        title: "Halaman Home",
        nama: "Teman Coding",
      });
    } else {
      res.render("index", { data: "" });
    }
  } catch (error) {
    console.log(error);
  }
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
  try {
    const materiData = await materi.create({
      judul: req.body.judul,
      narsum: req.body.narsum,
    });
    if (materiData) {
      res.redirect("/materi");
    }
  } catch (error) {
    console.log(error);
  }
};

controller.put = async function (req, res) {
  try {
    const materiData = await materi.update(
      {
        judul: req.body.judul,
        narsum: req.body.narsum,
      },
      {
        where: { id: req.body.id },
      }
    );
    if (materiData) {
      res.redirect(`/materi/${req.body.id}`);
    }
  } catch (error) {
    console.log(error);
  }
};

controller.delete = async function (req, res) {
  try {
    const materiData = await materi.destroy({
      where: { id: req.params.id },
    });
    if (materiData) {
      res.json({ redirect: `/materi` });
    }
  } catch (error) {
    console.log(error);
  }
};

controller.detail = async function (req, res) {
  try {
    const materiData = await materi.findAll({ where: { id: req.params.id } });
    if (materiData.length > 0) {
      res.render("detail", {
        data: materiData,
        layout: "partials/main",
        title: "Halaman Home",
        id: req.params.id,
      });
    } else {
      res.render("index", { data: "" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = controller;
