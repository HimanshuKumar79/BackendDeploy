const express = require("express");
const { HomePage } = require("../controller/HomePage");
const { ContactPage } = require("../controller/ContactPage");
const { AboutPage } = require("../controller/AboutPage");
const route = express.Router();

route.get("/", HomePage);
route.get("/Contact", ContactPage);
route.get("/About", AboutPage);

module.exports = route;
