"use strict";

// module
const express = require("express");
const app = express();

const PORT = 3000;

// route
const home = require("./routes/home");
app.use("/", home);

// appset
app.set("views", "./views");
app.set("view engine", "ejs");

module.exports = app;