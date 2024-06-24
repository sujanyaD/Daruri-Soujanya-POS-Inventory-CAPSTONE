import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Drawer } from '@mui/material';

const drawerwidth =100

const SidebarPOS = () => {
  return (
    <Drawer variant="permanent" sx={{width:drawerwidth}} anchor="left">
      <List>
        <ListItem component={Link} to="/products">
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem  component={Link} to="/sales">
          <ListItemText primary="Sales" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarPOS;
