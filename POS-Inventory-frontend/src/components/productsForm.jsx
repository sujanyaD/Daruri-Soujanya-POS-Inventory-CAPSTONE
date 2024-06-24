// // ProductList.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProductList = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             const result = await axios.get('/api/products');
//             setProducts(result.data);
//         };
//         fetchProducts();
//     }, []);

//     return (
//         <div>
//             <h2>Product List</h2>
//             <ul>
//                 {products.map(product => (
//                     <li key={product._id}>{product.name} - ${product.price}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ProductList;
