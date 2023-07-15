import { useState } from 'react';
import { Product, ProductAddToCart, ProductImage } from "../../styles/Products";
import ProductMeta from "./productMeta";
import { Dialog, DialogTitle, DialogContent, Typography, Button, TextField } from "@mui/material";

export default function SingleProduct({ item, onDelete, onUpdate }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({ ...item });

  const handleImageClick = () => {
    setIsDialogOpen(true);
  };

  const handleAddToCart = () => {
    // Add to cart functionality here
  };

  const handleDelete = () => {
    onDelete(item.item_id); // Call the onDelete function with the item ID
  };

  const handleUpdate = () => {
    setIsEditMode(true);
  };

  const handleConfirmUpdate = () => {
    fetch(`http://localhost:5000/${item.item_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedItem)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message); // Handle the response as needed
        onUpdate(updatedItem); // Call the onUpdate function with the updated item
        setIsEditMode(false);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedItem(prevItem => ({
      ...prevItem,
      [name]: value
    }));
  };

  return (
    <Product>
      <div onClick={handleImageClick}>
        <ProductImage src={item.item_picture} />
      </div>
      <ProductMeta item={item} />

      {/* Render the dialog box */}
      <Dialog open={isDialogOpen} onClose={handleClose}>
        <DialogTitle>{item.item_name}</DialogTitle>
        <DialogContent color="secondary" onClick={(e) => e.stopPropagation()}>
          <ProductImage src={item.item_picture} alt={item.item_name} />
          {isEditMode ? (
            <>
              <TextField
                name="item_name"
                label="Item Name"
                value={updatedItem.item_name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="item_picture"
                label="Item Picture"
                value={updatedItem.item_picture}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="item_price"
                label="Item Price"
                value={updatedItem.item_price}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                type="number"
              />
              <TextField
                name="item_description"
                label="Item Description"
                value={updatedItem.item_description}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
              <Button variant="contained" color="primary" onClick={handleConfirmUpdate}>
                Confirm Update
              </Button>
            </>
          ) : (
            <>
              <Typography variant="body1">{item.item_description}</Typography>
              <hr />
              <Button variant="contained" color="primary" onClick={handleUpdate} style={{ marginRight: '5px' }}
>
                Update
              </Button>
              <Button variant="contained" color="secondary" onClick={handleDelete}>
                Delete
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Product>
  );
}
