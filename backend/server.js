const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// GET inventory
app.get('/', async (req, res) => {
  try {
    const allItems = await pool.query('SELECT * FROM inv');
    res.json(allItems.rows);
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
});

app.post('/', async (req, res) => {
  try {
    const { item_name, item_picture, item_price, item_description } = req.body;
    const newItem = await pool.query(
      'INSERT INTO inv (item_name, item_picture, item_price, item_description) VALUES ($1, $2, $3, $4) RETURNING *',
      [item_name, item_picture, item_price, item_description]
    );
    res.json(newItem.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error);
  }
});


// GET a single item
app.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const item = await pool.query('SELECT * FROM inv WHERE item_id = $1', [id]);
    if (item.rows.length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item.rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
});

// UPDATE an item
app.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { item_name, item_picture, item_price, item_description } = req.body;
    const updateItem = await pool.query(
      'UPDATE inv SET item_name = $1, item_picture = $2, item_price = $3, item_description = $4 WHERE item_id = $5 RETURNING *',
      [item_name, item_picture, item_price, item_description, id]
    );
    if (updateItem.rows.length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item was updated', updatedItem: updateItem.rows[0] });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
});


// DELETE an item
app.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = await pool.query('DELETE FROM inv WHERE item_id = $1 RETURNING *', [id]);
    if (deleteItem.rows.length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item was deleted', deletedItem: deleteItem.rows[0] });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
});

// Add the addToCart route
const cartItems = [];

// GET route to fetch the cart items
app.get('/cart', (req, res) => {
  res.setHeader('Content-Type', 'application/json'); // Set the Content-Type header
  res.status(200).json(cartItems); // Send the cart items as JSON
});

// POST route to add an item to the cart
app.post('/addToCart', (req, res) => {
  const { itemId, itemName, quantity } = req.body;

  // Create a new item object and add it to the cartItems array
  const newItem = {
    itemId,
    itemName,
    quantity,
  };
  cartItems.push(newItem);

  res.json({ message: 'Item added to cart successfully' });
});

app.listen(5000, () => {
  console.log('🛒💰 Shopping on port 5000'); 
});


