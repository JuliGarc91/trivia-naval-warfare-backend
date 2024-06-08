//dependencies
const express = require('express');
const cors = require('cors');

// config
const app = express();

// middleware packages
app.use(cors());
app.use(express.json);