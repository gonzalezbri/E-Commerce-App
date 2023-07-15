import React, { useState, useEffect } from 'react';
import { Container, Grid, Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import SingleProduct from './singleProduct';
import SellModal from '../sell';

const Products = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  const handleClick = (item) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setSelectedItem(null);
    setIsDialogOpen(false);
  };

  const handleDelete = (itemId) => {
    // Handle delete functionality here
  };

  const handleUpdate = (updatedItem) => {
    // Handle update functionality here
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const renderProducts = items.map((item) => (
    <Grid item key={item.item_id} xs={12} sm={6} md={4} lg={3} style={{ padding: '16px', borderRadius: '10px' }}>
      <SingleProduct item={item} onDelete={handleDelete} onUpdate={handleUpdate} />
    </Grid>
  ));

  return (
    <Container>
      <Grid container spacing={2}>
        {renderProducts}
      </Grid>

      <SellModal isOpen={isModalOpen} onClose={handleModalClose} />

      <Dialog open={isDialogOpen} onClose={handleClose}>
        {selectedItem && (
          <>
            <DialogTitle>{selectedItem.item_name}</DialogTitle>
            <DialogContent>
              <Typography variant="body1">{selectedItem.item_description}</Typography>
              <Typography variant="body2">Price: ${selectedItem.item_price}</Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default Products;
