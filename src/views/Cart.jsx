import { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('/cart')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        setCartItems(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const handleAddToCart = (item) => {
    fetch('http://localhost:5000/addToCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        itemId: item.itemId,
        itemName: item.itemName,
        quantity: 1,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.message); // Handle the response as needed
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Cart Items:
      </Typography>
      <List>
        {cartItems.map(item => (
          <ListItem key={item.itemId}>
            <ListItemText primary={item.itemName} secondary={`Quantity: ${item.quantity}`} />
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Cart;
