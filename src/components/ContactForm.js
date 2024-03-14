import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactForm() {

  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [formStatus, setFormStatus] = useState('');

  const sendData = async () => {
    try {
      const FormData = {
        email: email,
        message: message
      }
      const response = await fetch('http://localhost:4000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData), // Replace this with your actual data
      });
      if(response.ok){
        const responseData = await response.json();
        console.log("Data sent:", responseData);
      } else {
        console.error('Failed to send data:', response.statusText);
      }
    } catch (error) {
      setFormStatus("Form failed to send")
      console.log({formStatus});
      console.error('Error sending data:', error);
    }
    };

  return (
    <Container style={{ maxWidth: '600px', padding: '20px', borderRadius: '10px'}}>
      <Container style = {{ backgroundColor: formStatus === "Form failed to send" ? 'pink' : 'transparent'}}>
        {formStatus}
      </Container>
      <Form className='container'>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" required onChange={(e) => setMessage(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="button" onClick={sendData}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
