

import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const SidebarPOS = () => {
  return (
    <div
      style={{ display:'flex',justifyContent: 'flex-start',
        height: '100%',
         }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink exact to="/login" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Login</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/products" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Products</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/register" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Registration Page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Sales" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Sales</CDBSidebarMenuItem>
            </NavLink>
           
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            &copy; {new Date().getFullYear()} POS@DS. All rights reserved.
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SidebarPOS;



