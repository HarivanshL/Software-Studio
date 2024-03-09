import '../css-styling/App.css';
import LoginForm from '../components/LoginForm';
import { Navbar, Container } from 'react-bootstrap';


async function authenticate() {

}

function Login() {
  return (
    <>
      <Navbar />

      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LoginForm />
      </Container>

    </>
  );
}

export default Login;
