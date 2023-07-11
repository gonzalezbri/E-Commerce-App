// DEPENDENCIES
const express = require('express')
const {Sequelize} = require('sequelize')


// CONFIG
require('dotenv').config();
const PORT = process.env.PORT;
console.log('My port is:', PORT);

const app = express();

//added
const cors = require('cors')
const pool = require('./db')


//MIDDLEWARE
//middleware 
app.use(cors());
app.use(express.json())


//GET inv
app.get('/', async(req, res) => {
    try {
        const allItems = await pool.query("SELECT * FROM inv")
        console.log(res.json(allItems.rows))
    } catch (err) {
        console.log(err.message)
        res.status(500).json(err)
    }
})


// 404 Page
app.get("*", (req, res) => {
    res.send("404");
});

// LISTEN
app.listen(5000, () => {
    console.log(`🛒💰 Shoppin' on port: ${process.env.PORT}`)
}) 