import React from 'react';
import { Product, ProductImage } from '../../styles/Products';
import ProductMeta from './ProductMeta'; // Correct the import path and component name

interface Item {
  item_picture: string;
  item_name: string;
  item_price: number;
  // Add other properties based on your data structure
}

const item = {
  item_name: 'Product Name',
  item_price: 20.0,
  item_picture: '/path/to/image.jpg',
};

<SingleProduct item={item} />;


interface SingleProductProps {
  item: Item;
}

export default function SingleProduct({ item }: SingleProductProps) {
  return (
    <Product>
      <ProductImage src={item.item_picture} alt="Product Image" />
      <ProductMeta item={item} />
    </Product>
  );
}
