const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { result } = require("lodash");
const morgan = require("morgan");
const app = express();
const port = 3000;
const db = require("./config");
const materiRoutes = require("./route/materiRoute");

app.set("view engine", "ejs");

app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));
app.use(morgan("dev"));

app.get("/", (re6q, res) => {
  // res.sendFile('/views/index.html', {root: __dirname});

  // const materi = [
  //     {
  //         judul: 'nodejs',
  //         narasumber: 'raihan dan fira'
  //     },
  //     {
  //         judul: 'javascript',
  //         narasumber: 'andi dan farrell'
  //     }
  // ]
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
  //   res.render("index", {
  //     layout: "partials/main",
  //     title: "Halaman Home",
  //     nama: "Temancoding",
  //   });
});

app.use("/materi", materiRoutes);

app.use((req, res, next) => {
  const token = true;
  if (token == true) {
    next();
  } else {
    res.render("403", {
      layout: "partials/main",
      title: "Halaman Tidak Ditemukan",
    });
  }
});

app.get("/about", (req, res) => {
  res.render("about", { layout: "partials/main", title: "Halaman About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { layout: "partials/main", title: "Halaman Contact" });
});

app.get("/create-materi", (req, res) => {
  res.render("create", { layout: "partials/main", title: "Halaman Materi" });
});

app.get("/edit-materi/:id", (req, res) => {
  const sql = `select * from materi WHERE id=${req.params.id}`;

  db.query(sql, function (err, rows) {
    if (err) {
      // req.flash('error', err)
      res.render("index", { data: "" });
    } else {
      console.log(rows);
      res.render("edit", {
        layout: "partials/main",
        title: "Halaman Materi",
        id: req.params.id,
        data: rows[0],
      });
    }
  });
});

app.use((req, res) => {
  res.status(404).render("404", {
    layout: "partials/main",
    title: "Halaman Tidak Ditemukan",
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
