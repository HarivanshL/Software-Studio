import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  const sendData = () => {
    // Function to handle form submission
  };

  return (
    <Container style={{ maxWidth: '600px', background: 'white', padding: '20px', borderRadius: '10px'}}>
      <Form className='container'>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Password</Form.Label>
          <Form.Control as="textarea" rows={3} required />
        </Form.Group>

        <Button variant="primary" type="button" onClick={sendData}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
