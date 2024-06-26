import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        // height: "100vh",
        overflow: "hidden",
        width:"1500px"
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: "240px",
          backgroundColor: "#f0f0f0",
          borderRight: "1px solid #ccc",
          zIndex: 1,
          overflowY: "none", 
        }}
      >
        <Sidebar />
      </Box>

      
      <Box
        sx={{
       
          padding: 0,
          marginLeft: "80px", 
          overflowY: "auto", 
          position: "relative", 
          zIndex: 0, 
          

        }}
      >
        {children}
      </Box>

         </Box>
  );
};

export default Layout;
