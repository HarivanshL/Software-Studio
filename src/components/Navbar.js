import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "../css-styling/Navbar.css";
import oulogo from "../assets/ou-logo.png";

const CustomNavbar = () => {
  return (
    <>
      <div className="banner-container text-center py-1">
        <div>
          <img src={oulogo} alt="OU-logo" className="OU-logo-image ms-5 me-4" />
          <h1 className="display-4 ms-5">
            Software Studio
          </h1>
        </div>
      </div>
      <Navbar bg="crimson" variant="dark" className="navbar">
        <Container>
          <Nav className="me-auto ms-5">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            {/*
            <Nav.Link as={Link} to="/about" className="nav-link">
              About
            </Nav.Link>
  */}
            <Nav.Link as={Link} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              as={Link}
              to="/login"
              variant="light"
              className="login-button me-5"
            >
              Login
            </Button>
          </Nav>
        </Container>
      </Navbar>


    </>
  );
};

export default CustomNavbar;
