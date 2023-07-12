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

// POST create an inv submission
app.post('/', async (req, res) => {
    try {
      const { item_type, item_name, item_picture, item_price, item_description } = req.body;
      const newItem = await pool.query(
        "INSERT INTO inv (item_type, item_name, item_picture, item_price, item_description) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [item_type, item_name, item_picture, item_price, item_description]
      );
      res.json(newItem);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


//GET one item

app.get('/:id', async(req, res) => {
    try {
        const {id} = req.params
        const item = await pool.query("SELECT * FROM inv WHERE item_id = $1", [id])
        res.json(item.rows[0])
    } catch (error) {
        console.log(error.message)
        
    }
})

// UPDATE an item price and picture
app.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { item_price, item_picture } = req.body;
      const updateItem = await pool.query(
        "UPDATE inv SET item_price = $1, item_picture = $2 WHERE item_id = $3",
        [item_price, item_picture, id]
      );
      res.json("Price and picture were updated successfully");
    } catch (error) {
      console.error(error.message);
      res.status(500).json("An error occurred while updating the price and picture");
    }
  });
  
  

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
    console.log('Bro, the server has started')
})