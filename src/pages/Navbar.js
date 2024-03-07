import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../css-styling/Navbar.css';
import bannerImage from '../assets/images.jpeg'

const CustomNavbar = () => {
  return (
    <>
      <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner-image" />
        <div className="banner-text">Software Studio</div>
      </div>
      <Navbar bg="crimson" variant="dark" className="navbar">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Button as={Link} to="/login" variant="light" className="login-button">Login</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
