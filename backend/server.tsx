import express, { Request, Response } from 'express';
import cors from 'cors';
import pool from './db';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// GET inv
app.get('/', async (req: Request, res: Response) => {
  try {
    const allItems = await pool.query('SELECT * FROM inv');
    res.json(allItems.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err);
  }
});

// POST create an inv submission
app.post('/', async (req: Request, res: Response) => {
  try {
    const { item_name } = req.body;
    console.log(item_name);
    const newItem = await pool.query('INSERT INTO inv(item_name) VALUES($1) RETURNING *', [
      item_name,
    ]);
    res.json(newItem.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// GET one item
app.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const item = await pool.query('SELECT * FROM inv WHERE item_id = $1', [id]);
    res.json(item.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// UPDATE an item price
app.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { item_price } = req.body;
    await pool.query('UPDATE inv SET item_price = $1 WHERE item_id = $2', [item_price, id]);
    res.json('Price was updated');
  } catch (error) {
    console.error(error.message);
  }
});

// DELETE an item
app.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM inv WHERE item_id = $1', [id]);
    res.json('Item was deleted');
  } catch (error) {
    console.error(error.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🛒💰 Shoppin on port ${PORT}`);
});
