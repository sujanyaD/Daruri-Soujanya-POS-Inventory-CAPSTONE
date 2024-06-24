import React, { useEffect, useState } from 'react';
import { getSales } from '../services/api';
import { List, ListItem, ListItemText } from '@mui/material';

const Sales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    const { data } = await getSales();
    setSales(data);
  };

  return (
    <div>
      <h2>Sales</h2>
      <List>
        {sales.map((sale) => (
          <ListItem key={sale._id}>
            <ListItemText primary={`${sale.productId.name} - ${sale.quantity} pcs - ${new Date(sale.date).toLocaleString()}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sales;
