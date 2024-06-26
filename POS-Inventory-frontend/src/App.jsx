
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Layout from './components/layout';
import Products from './pages/productsForm';
import Sales from './pages/salesFom';
import Login from './pages/login';
import Register from './pages/register';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
         <Route  path="/login" element={<Login/>} />
         <Route  path="/register" element={<Register/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sales />} />
          <Route path='*' element={<Navigate to="/login"/>}/>
        </Routes>
      </Layout>
    </Router>
  );
};
 export default App;


