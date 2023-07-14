import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme';
import AppBar from './components/appBar';
import Banner from './components/banner';
import PromoBar from './components/promobar';
import Products from './components/products/index';
import Cart from './views/Cart';

function App() {
  useEffect(() => {
    document.title = 'Dark Alley Deals';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: '#212121' }}>
        <Router>
          <AppBar />
          <Banner />
          <PromoBar />
          <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
            <Typography color="secondary" variant="h4">
              Products In Stock
            </Typography>
          </Box>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
