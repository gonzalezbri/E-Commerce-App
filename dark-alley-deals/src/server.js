// DEPENDENCIES
const express = require('express')
const {Sequelize} = require('sequelize')


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
app.listen(process.env.PORT, () => {
    console.log(`🛒💰 Shoppin' on port: ${process.env.PORT}`)
}) 