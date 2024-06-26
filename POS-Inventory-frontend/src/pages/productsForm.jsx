

import React, { useEffect, useState } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/api';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Card, CardContent, CardActions, Typography } from '@mui/material';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ ProductName: '', ProductPrice: 0, ProductCategory: '', ProductQuantity: 0 });
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await getProducts();
    setProducts(data);
  };

  const handleCreateProduct = async () => {
    const { data } = await createProduct(newProduct);
    setProducts([...products, data]);
    setNewProduct({ ProductName: '', ProductPrice: 0, ProductCategory: '', ProductQuantity: 0 });
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
  };

  const handleUpdateProduct = async () => {
    const { data } = await updateProduct(editProduct._id, editProduct);
    setProducts(products.map((p) => (p._id === editProduct._id ? data : p)));
    setEditProduct(null);
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((p) => p._id !== id));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Products</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Name"
          value={newProduct.ProductName}
          onChange={(e) => setNewProduct({ ...newProduct, ProductName: e.target.value })}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          label="Category"
          value={newProduct.ProductCategory}
          onChange={(e) => setNewProduct({ ...newProduct, ProductCategory: e.target.value })}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          label="Price"
          type="number"
          value={newProduct.ProductPrice}
          onChange={(e) => setNewProduct({ ...newProduct, ProductPrice: parseInt(e.target.value) || 0 })}
          fullWidth
        />
      </Grid>
      
      <Grid item xs={12} md={2}>
        <TextField
          label="Quantity"
          type="number"
          value={newProduct.ProductQuantity}
          onChange={(e) => setNewProduct({ ...newProduct, ProductQuantity: parseInt(e.target.value) || 0 })}
          fullWidth
        />
      </Grid>
      <Grid item xs={4} flexDirection={"right"}>
        <Button onClick={handleCreateProduct} variant="contained" color="primary">
          Add Product
        </Button>
      </Grid>
      <Grid item xs={12}>
        
      </Grid>
      {products.map((product) => (
        <Grid item xs={3} sm={4} md={4} key={product._id}>
          <Card>
            <CardContent>
              <h3>{product.ProductName}</h3>
              <p>Category:{product.ProductCategory}</p>
              <p>Price: ${product.ProductPrice}</p>
              <p>Quantity: {product.ProductQuantity} pcs</p>
              <img src={product.Imagepath} alt={product.ProductName} style={{ height: '300px', width: '300px', objectFit: 'cover' }} />
            </CardContent>
            <CardActions>
              <Button onClick={() => handleEditProduct(product)} variant="outlined" color="primary">
                Edit
              </Button>
              <Button onClick={() => handleDeleteProduct(product._id)} variant="outlined" color="error">
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      {editProduct && (
        <Grid item xs={12}>
          <Dialog open={true} onClose={() => setEditProduct(null)}>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogContent>
              <TextField
                label="Name"
                value={editProduct.ProductName}
                onChange={(e) => setEditProduct({ ...editProduct, ProductName: e.target.value })}
                fullWidth
              />
              <TextField
                label="Price"
                type="number"
                value={editProduct.ProductPrice}
                onChange={(e) => setEditProduct({ ...editProduct, ProductPrice: parseInt(e.target.value) || 0 })}
                fullWidth
              />
              <TextField
                label="Quantity"
                type="number"
                value={editProduct.ProductQuantity}
                onChange={(e) => setEditProduct({ ...editProduct, ProductQuantity: parseInt(e.target.value) || 0 })}
                fullWidth
              />
                 <TextField
                label="Category"
                value={editProduct.ProductCategory}
                onChange={(e) => setEditProduct({ ...editProduct, ProductCategory: e.target.value})}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setEditProduct(null)} color="primary">
                Cancel
              </Button>
              <Button onClick={handleUpdateProduct} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      )}
    </Grid>
  );
};

export default Products;

