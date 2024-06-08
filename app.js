// dependencies
const express = require('express');
const cors = require('cors');

// config
const app = express();

// middleware packages
app.use(cors());
app.use(express.json());

// routes
app.get('/',(req,res)=>{
    res.status(200).json({"message" : "Hello"})
})
// 404 page
app.get('*',(req,res) => {
    res.status(404).json({ error: "Page not found :-(" })
})

module.exports = app;