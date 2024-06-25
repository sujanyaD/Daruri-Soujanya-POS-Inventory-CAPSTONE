import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function NavbarPOS() {
  const [theme, setTheme] = useState('dark'); 

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <Navbar expand="lg" variant={theme} className={`fixed-top ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
      <div>
        Inventory Managment System
      </div>
      
    </Navbar>
  );
}

export default NavbarPOS;