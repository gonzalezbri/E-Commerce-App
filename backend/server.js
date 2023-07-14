const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//middleware 
app.use(cors());
app.use(express.json())

//routes

//GET inv
app.get('/', async(req, res) => {
    try {
        const allItems = await pool.query("SELECT * FROM inv")
        res.json(allItems.rows)
    } catch (err) {
        console.log(err.message)
        res.status(500).json(err)
    }
})

//POST create a inv submission
// POST create an inv submission
app.post('/', async (req, res) => {
    try {
      const { item_name, item_picture, item_price, item_description } = req.body;
      const newItem = await pool.query(
        "INSERT INTO inv(item_name, item_picture, item_price, item_description) VALUES($1, $2, $3, $4) RETURNING *",
        [item_name, item_picture, item_price, item_description]
      );
      res.json(newItem.rows[0]);
     // Refresh the page
    } catch (error) {
      console.error(error.message);
      res.status(500).json("An error occurred while creating the inv submission");
    }
  });


//GET one item

app.get('/:id', async(req, res) => {
    try {
        const {id} = req.params
        const item = await pool.query("SELECT FROM inv WHERE item_id = $1", [id])
        res.json(item.rows[0])
    } catch (error) {
        console.log(error.message)

    }
})

//UPDATE an item price
app.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {item_price} = req.body;
        const updateItem = await pool.query("UPDATE inv SET item_price = $1 WHERE item_id = $2", [item_price, id]);
        res.json('price was updated')

    } catch (error) {
        console.log(error.message)
    }

})

//DELETE an item
app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const deleteItem = await pool.query("DELETE FROM inv WHERE item_id = $1", [id])
        res.json("item was deleted")
    } catch (error) {

    }
})


app.listen(5000, () => {
    console.log('🛒💰 Shoppin on port 5000')
})



