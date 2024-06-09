// dependencies
const cors = require("cors");
// json - server;
// const path = require("path");
const data = require("./data/TriviaDB.json");
const express = require("express");
// RSS parser
const RSSParser = require('rss-parser');
const parser = new RSSParser();

const parse = async (section) => {
    const feedURL = `https://rss.nytimes.com/services/xml/rss/nyt/${section}.xml`;
    const feed = await parser.parseURL(feedURL);
    console.log(feed.title);
    feed.items.forEach(item => {
        articles.push({ item });
    });
};

const app = express();
// middleware packages
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

// RSS Feed Route
// example of a route to enter in browser - http://localhost:3003/section?section=World
app.get('/section', async (req, res) => {
    const section = req.query.section;
    if (!section) {
        return res.status(400).json({ error: "Section parameter is required." });
    }
    articles = []; // reset articles array
    await parse(section);
    res.send(articles);
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
