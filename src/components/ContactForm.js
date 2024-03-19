import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { contact } from '../utilities/contact'

function ContactForm() {

  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [formStatus, setFormStatus] = useState('');

  const sendData = async () => {

      try{
        const formData = {
          email: email,
          message: message
        }
        const response = await contact(formData);
        if(Object.keys(response).length <1){
          setFormStatus("Your message failed to send");
        }
        else{
          setFormStatus("Your message has been sent!");
        }
      }
      catch(error){
        console.log(error);
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
