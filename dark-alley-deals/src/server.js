// DEPENDENCIES

require('dotenv').config();
const express = require('express')
const {Sequelize} = require('sequelize')


// CONFIG
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
app.listen(8000, () => {
    const sequelize = new Sequelize(process.env.PG_URI);

try {
    sequelize.authenticate();
    console.log(`Connected to database at ${process.env.PG_URI}`);
} catch(e) {
    console.log('Unable to connect to database', e);
}
    console.log(`🛒💰 Shoppin' on port: ${process.env.PORT}`)
}) 

