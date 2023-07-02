import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../api'; // Assuming you have an API to fetch products

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsData = await getProducts(); // Assuming getProducts() returns an array of products
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to the E-commerce Store!</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
