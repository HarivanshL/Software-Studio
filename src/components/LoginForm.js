import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loginUser }  from '../utilities/auth/login'; 

function LoginForm() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginStatus, setLoginStatus] = useState('');
  const sendData = async() => {
    // Function to handle form submission
    const formData = {
      email: email,
      password: password
    }
    try {
      const response = await loginUser(formData);
      if(response.ok){
        const responseData = await response.json();
        console.log("login succesful");
        //Insert redirect here
      } else {
        setLoginStatus("Incorrect username or password")
        console.log({loginStatus});
        console.error("Failed to authenticate");
      }
    } catch (error) {
      console.log(error);
    }
    
  };


  return (
    <>
    <Container style={{ maxWidth: '600px', background: 'white', padding: '20px', borderRadius: '10px'}} >
    <Container style = {{ backgroundColor: loginStatus === "Incorrect username or password" ? '#ffcccc' : 'transparent'}}>
        {loginStatus}
      </Container>
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
