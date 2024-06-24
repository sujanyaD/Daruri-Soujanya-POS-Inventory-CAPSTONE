

// import React, { useEffect, useState } from 'react';
// import NavbarPOS from './components/Navbar';
// import SidebarPOS from './components/Sidebar';
// import Layout from './components/layout';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { getProducts, createProduct, updateProduct, deleteProduct, getSales, createSale } from './services/api';

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [sales, setSales] = useState([]);
//   const [newProduct, setNewProduct] = useState({ name: '', price: 0, quantity: 0 });
// // using use effect Hook to fetch API
//   useEffect(() => {
//     fetchProducts();
//     fetchSales();
//   }, []);

//   const fetchProducts = async () => {
//     const { data } = await getProducts();
//     setProducts(data);
//   };

//   const fetchSales = async () => {
//     const { data } = await getSales();
//     setSales(data);
//   };

//   const handleCreateProduct = async () => {
//     const { data } = await createProduct(newProduct);
//     setProducts([...products, data]);
//   };

//   const handleUpdateProduct = async (id) => {
//     const updatedProduct = products.find((product) => product._id === id);
//     const { data } = await updateProduct(id, updatedProduct);
//     setProducts(products.map((product) => (product._id === id ? data : product)));
//   };

//   const handleDeleteProduct = async (id) => {
//     await deleteProduct(id);
//     setProducts(products.filter((product) => product._id !== id));
//   };

//   const handleCreateSale = async (productId, quantity) => {
//     const { data } = await createSale({ productId, quantity });
//     setSales([...sales, data]);
//   };

//   return (
//     <div>
//       {/* <h1>POS and Inventory Management</h1> */}
//       <div>
//         <NavbarPOS title="POS-IMS" about="About"></NavbarPOS>
//         {/* <SidebarPOS title="POS" about="Home"></SidebarPOS> */}

//         <h2>Products</h2>
//         <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
//         <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
//         <input type="number" placeholder="Quantity" value={newProduct.quantity} onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })} />
//         <button onClick={handleCreateProduct}>Add Product</button>
//         <ul>
//           {products.map((product) => (
//             <li key={product._id}>
//               {product.ProductName} - ${product.ProductPrice} - {product.ProductQuantity} pcs {<img src={product.Imagepath} />}
//               <button onClick={() => handleUpdateProduct(product._id)}>Update</button>
//               <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Sales</h2>
//         <ul>
//           {sales.map((sale) => (
//             <li key={sale._id}>
//               {sale.productId.name} - {sale.quantity} pcs - {new Date(sale.date).toLocaleString()}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
  
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Products from './pages/productsForm';
import Sales from './pages/salesFom';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;