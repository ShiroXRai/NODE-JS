const express = require("express");
const app = express.Router();
const materiController = require("../controller/materiController");

app.get("/", materiController.get);

app.get("/tambah", materiController.tambahDataStatis);

app.post("/", materiController.post);

app.post("/:id", materiController.put);

app.delete("/:id", materiController.delete);

app.get("/:id", materiController.detail);

module.exports = app;
