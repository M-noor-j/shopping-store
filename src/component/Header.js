import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-white shadow " sticky='top' >
    <Container>
      <Navbar.Brand href="#home" className='fst-italic fw-bolder hero-heading'>URS SHOPPING STORE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto gap-5">

        <Link to="/" className='text-dark text-decoration-none fw-bolder' >Home</Link>
        <Link to="/cart" className='text-dark text-decoration-none fw-bolder' >Cart</Link>
        <Link to="/" className='text-dark text-decoration-none fw-bolder' >Home</Link>
        <Link to="/cart" className='text-dark text-decoration-none fw-bolder' >Cart</Link>
        <Link to="/" className='text-dark text-decoration-none fw-bolder' >Home</Link>
        <Link to="/cart" className='text-dark text-decoration-none fw-bolder' >Cart</Link>
    
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header