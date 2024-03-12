import React from 'react'
import ContactForm from '../components/ContactForm'
import '../css-styling/Contact.css'
import { Navbar, Container} from 'react-bootstrap'
import CustomNavbar from '../components/Navbar'
function Contact() {

    return (
        <>
            <CustomNavbar />
            <Container className='container1'>
                <h1>Contact us</h1>
                <p>We are happy to address any concerns or thoughts you would like to share with us.</p>
                <p>
                    Feel free to check out our FAQ page. {/**Insert FAQ hyperlink or Linbar component */}
                </p>
            </Container>

            <ContactForm />

        </>
    )
}

export default Contact
