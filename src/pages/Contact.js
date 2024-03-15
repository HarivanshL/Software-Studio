import React from "react";
import ContactForm from "../components/ContactForm";
import "../css-styling/Contact.css";
import { Navbar, Container } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";
import Linkbar from "../components/Linkbar";
function Contact() {
  const links = [{ name: "FAQ", route: "/" }];
  return (
    <>
      <CustomNavbar/>
      <Container fluid className="container1" class = "mt-5" >
        <h1 className="mt-5 text-center">Contact us</h1>
        <div>
          <p className="mt-5 mb-5">
            We are happy to address any concerns or thoughts you would like to
            share with us.
          </p>
          <p className="mb-3">Feel free to check out our FAQ page.</p>
        </div>
      </Container>
      <Linkbar class = "mt-5" links={links} />
      <ContactForm />
    </>
  );
}

export default Contact;
