import '../css-styling/App.css';
import LoginForm from '../components/LoginForm';
import { Navbar, Container } from 'react-bootstrap';
import CustomNavbar from '../components/Navbar'
async function authenticate() {

}

function Login() {
  return (
    <>
      <CustomNavbar />
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LoginForm />
      </Container>

    </>
  );
}

export default Login;
