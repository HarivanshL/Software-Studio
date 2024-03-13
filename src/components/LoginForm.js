import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const sendData = async() => {
    // Function to handle form submission

    try {
      const FormData = {
        email: email,
        password: password
      }
      const response = await fetch('http://localhost:4000/login', {
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
      console.error('Error sending data:', error);
    }
    };

  return (
    <>
    <Container style={{ maxWidth: '600px', background: 'white', padding: '20px', borderRadius: '10px'}}>
      <Form className='container'>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" required onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Password</Form.Label>
          <Form.Control as="textarea" rows={3} required onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="button" onClick={sendData}>
          Submit
        </Button>
      </Form>
    </Container>
    </>

  );
}

export default LoginForm;
