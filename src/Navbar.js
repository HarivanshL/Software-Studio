import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Sponsors from './Sponsors'
import Login from './Login'

/*function navigationBar() {
    
    
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `newPath`; 
        navigate(path);
    }*/

const Navbar = () => {
    return (
      <nav className="navBar">
        <div className="navContainer">
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/sponsors" className="navLink">
              Sponsors
          </Link>
        </div>
        <div className="navContainerRight">
            <div className="loginButton">
            <Link to="/login" className="navLink">
                Login
            </Link>
            </div>
        </div>
      </nav>
    );
  };

export default Navbar;