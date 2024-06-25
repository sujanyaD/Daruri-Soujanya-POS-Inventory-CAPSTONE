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
      <Container>
        <Navbar.Brand href="#home">POS-IMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">MakeUp Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Home Decor Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Clothes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant={theme === 'dark' ? 'light' : 'dark'} onClick={toggleTheme}>
            {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPOS;