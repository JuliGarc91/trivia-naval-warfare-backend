// dependencies
const app = require('./app.js');

// configuration
require("dotenv").config()
const PORT = process.env.PORT || 3003;

// listen
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});