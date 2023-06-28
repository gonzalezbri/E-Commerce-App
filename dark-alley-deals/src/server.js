// DEPENDENCIES
const express = require('express')


// CONFIG
require('dotenv').config();
const PORT = process.env.PORT;
console.log('My port is:', PORT);

const app = express();


//MIDDLEWARE
app.get('/', (req, res) => {
    res.send('Hello, World!');
    });


// 404 Page
app.get("*", (req, res) => {
    res.send("404");
});

// LISTEN
app.listen(PORT, () => {
    console.log("Server is listening on port", PORT);
});