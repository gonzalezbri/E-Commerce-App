import React from 'react';
import { Typography } from '@mui/material';
import { ProductMetaWrapper } from '../../styles/Products';

interface Item {
  item_name: string;
  item_price: number;
  // Add other properties based on your data structure
}

interface ProductMetaProps {
  item: Item;
}

export default function ProductMeta({ item }: ProductMetaProps) {
  return (
    <ProductMetaWrapper>
      <Typography color="secondary" variant="h5" lineHeight={2}>
        {item.item_name}
      </Typography>
      <Typography color="#FFC107" variant="h6">
        ${item.item_price}
      </Typography>
    </ProductMetaWrapper>
  );
}
