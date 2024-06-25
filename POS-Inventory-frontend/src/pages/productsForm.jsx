import React, { useEffect, useState } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/api';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText, Grid } from '@mui/material';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ ProductName: '', ProductPrice: 0, ProductCatogry:'', ProductQuantity: 0 });
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
    setNewProduct({ ProductName: '', ProductPrice: 0, ProductCatogry:'', ProductQuantity: 0 });
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
  };

  const handleUpdateProduct = async () => {
    const { data } = await updateProduct(editProduct._id, editProduct);
    setProducts(products.map((product) => (product._id === editProduct._id ? data : product)));
    setEditProduct(null);
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h2>Products</h2>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField label="Name" value={newProduct.ProductName} onChange={(e) => setNewProduct({ ...newProduct, ProductName: e.target.value })} fullWidth />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField label="Price" type="number" value={newProduct.ProductPrice} onChange={(e) => setNewProduct({ ...newProduct, ProductPrice: parseInt(e.target.value) || 0 })} fullWidth />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField label="Category"  value={newProduct.ProductCatogry} onChange={(e) => setNewProduct({ ...newProduct, ProductCatogry: e.target.value})} fullWidth />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField label="Quantity" type="number" value={newProduct.ProductQuantity} onChange={(e) => setNewProduct({ ...newProduct, ProductQuantity: parseInt(e.target.value) || 0 })} fullWidth />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleCreateProduct} variant="contained" color="primary">Add Product</Button>
      </Grid>
      <Grid item xs={12}>
        <List>
          {products.map((product) => (
            <ListItem key={product._id}>
              <ListItemText 
                primary={`${product.ProductName} - $${product.ProductPrice} - ${product.ProductQuantity} pcs`}
                secondary={<img src={product.Imagepath} alt={product.ProductName} style={{ height: '150px', width: '250px' }} />}
              />
              <Button onClick={() => handleEditProduct(product)} variant="outlined" color='primary'>Edit</Button>
              <Button onClick={() => handleDeleteProduct(product._id)} variant="outlined" color='warning'>Delete</Button>
            </ListItem>
          ))}
        </List>
      </Grid>
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
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setEditProduct(null)} color="primary">Cancel</Button>
              <Button onClick={handleUpdateProduct} color="primary">Save</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      )}
    </Grid>
  );
};
export default Products;
