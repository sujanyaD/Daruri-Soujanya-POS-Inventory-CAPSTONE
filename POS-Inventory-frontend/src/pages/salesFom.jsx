

import React, { useEffect, useState } from 'react';
import { getSales } from '../services/api';
import {
  List,
  ListItem,
  ListItemText,
  Container,
  Grid,
  Typography,
  Button,
  Box,
  ListItemSecondaryAction,
  Paper, // Import Paper component from Material-UI
} from '@mui/material';
import backgroundImg from '../Images/home-banner.jpg'; 

const Sales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    const { data } = await getSales();
    setSales(data);
  };

  const [products] = useState([
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 15 },
    { id: 3, name: 'Product C', price: 20 },
  ]);

  const ProductList = ({ products, addToCart }) => {
    return (
      <Paper sx={{ padding: '10px', marginBottom: '10px' }}> {/* Frame-like appearance */}
        <List>
          {products.map(product => (
            <ListItem key={product.id}>
              <ListItemText primary={`${product.name}`} secondary={`$${product.price}`} />
              <ListItemSecondaryAction>
                <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  };

  const Cart = ({ cartItems }) => {
    return (
      <Paper sx={{ padding: '10px', marginBottom: '10px' }}> {/* Frame-like appearance */}
        <List>
          {cartItems.map(item => (
            <ListItem key={item.id}>
              <ListItemText primary={`${item.name}`} secondary={`$${item.price}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  };

  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    setCartItems([...cartItems, product]);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Container maxWidth="lg">
      <Box mt={6} mb={4}>
        <Typography variant="h2" align="center" gutterBottom>
          Point of Sales
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProductList products={products} addToCart={addToCart} />
        </Grid>
        <Grid item xs={6}>
          <Cart cartItems={cartItems} />
          <Box mt={2}>
            <Typography variant="h6" align="right">
              Total: ${calculateTotal()}
            </Typography>
            <Button variant="contained" color="primary" fullWidth>
              Checkout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sales;
