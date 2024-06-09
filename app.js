// dependencies
const cors = require("cors");
// json - server;
// const path = require("path");
const data = require("./data/TriviaDB.json");
const express = require("express");

const app = express();
// middleware packages
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

// mount trivia db
app.get("/api", (req, res) => {
  res.status(200).json(data);
});

// 404 page
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found :-(" });
});

module.exports = app;
