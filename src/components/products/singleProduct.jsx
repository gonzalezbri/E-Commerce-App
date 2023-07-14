import { useState } from 'react';
import { Product, ProductAddToCart, ProductImage } from "../../styles/Products";
import ProductMeta from "./productMeta";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

export default function SingleProduct({ item }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleImageClick = () => {
    setIsDialogOpen(true);
  };

  const handleAddToCart = () => {
    fetch('/addToCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        itemId: item.item_id,
        itemName: item.item_name,
        quantity: 1
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message); // Handle the response as needed
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Product>
      <div onClick={handleImageClick}>
        <ProductImage src={item.item_picture} />
      </div>
      <ProductMeta item={item} />
      <ProductAddToCart variant="contained" onClick={handleAddToCart}>
        Add to Cart
      </ProductAddToCart>
      {/* Render the dialog box */}
      <Dialog open={isDialogOpen} onClose={handleClose}>
        <DialogTitle>{item.item_name}</DialogTitle>
        <DialogContent color="secondary" onClick={(e) => e.stopPropagation()}>
          <ProductImage src={item.item_picture} alt={item.item_name} />
          <Typography variant="body1">{item.item_description}</Typography>
          <hr />
        </DialogContent>
      </Dialog>
    </Product>
  );
}





