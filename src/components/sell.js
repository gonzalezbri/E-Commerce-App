import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const SellModal = ({ isOpen, onClose }) => {
  const [item_name, setItemName] = useState("");
  const [item_picture, setItemPicture] = useState("");
  const [item_description, setItemDescription] = useState("");
  const [item_price, setItemPrice] = useState("");

  const handleOpen = () => {
    setItemName("");
    setItemPicture("");
    setItemDescription("");
    setItemPrice("");
  };

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = {
        item_name,
        item_picture,
        item_description,
        item_price,
      };
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        // Perform any necessary actions, e.g., display a success message
        console.log("Item added successfully");
        handleClose();
      } else {
        // Handle the error case, e.g., display an error message
        console.error("Failed to add item");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        Sell
      </Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle style={{ backgroundColor: '#212120', color: '#d1adcc' }}>Sell</DialogTitle>
        <DialogContent style={{ backgroundColor: '#c9c9c9' }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Product Name"
              fullWidth
              value={item_name}
              onChange={(e) => setItemName(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Product Image"
              fullWidth
              value={item_picture}
              onChange={(e) => setItemPicture(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Product Description"
              fullWidth
              value={item_description}
              onChange={(e) => setItemDescription(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Product Price"
              fullWidth
              value={item_price}
              onChange={(e) => setItemPrice(e.target.value)}
              margin="normal"
            />
            <DialogActions style={{ backgroundColor: '#212120' }}>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" color="secondary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SellModal;