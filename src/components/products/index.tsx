import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
import SingleProduct from './SingleProduct';

interface Item {
  item_id: number;
  item_picture: string;
  item_name: string;
  item_price: number;
  // Add other properties based on the actual data structure
}

export default function Products() {
  const theme = useTheme();
  const [items, setItems] = useState<Item[]>([]);

  const getItems = async () => {
    try {
      const response = await fetch('http://localhost:5000');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData: Item[] = await response.json();

      setItems(jsonData);
    } catch (err) {
      console.error(err.message);
      // You can add additional error handling logic here, such as showing an error message to the user.
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const renderProducts = items.map((item) => (
    <Grid
      item
      key={item.item_id}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <SingleProduct item={item} />
    </Grid>
  ));

  return (
    <Container>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ margin: '20px 4px 10px 4px' }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}
