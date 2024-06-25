import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getProducts = () => axios.get(`${API_URL}/products`);
export const createProduct = (product) => axios.post(`${API_URL}/addproduct`, product);
export const updateProduct = (id, product) => axios.put(`${API_URL}/editproduct?id=${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/deleteproduct?productId=${id}`);

export const getSales = () => axios.get(`${API_URL}/sales`);
export const createSale = (sale) => axios.post(`${API_URL}/sales`, sale);
export const login = (login) => axios.post(`${API_URL}/api/login`, login);
export const register = (register) => axios.post(`${API_URL}/api/register`, register);

