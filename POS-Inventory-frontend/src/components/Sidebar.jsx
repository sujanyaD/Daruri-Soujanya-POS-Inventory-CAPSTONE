
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Drawer,Grid } from '@mui/material';

const drawerWidth = 240; 

const SidebarPOS = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor:'darkslategrey', 
        },
      }}
      anchor="left"
    >
      <List>
        <ListItem component={Link} to="/products">
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem component={Link} to="/sales">
          <ListItemText primary="Sales" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarPOS;
