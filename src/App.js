import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './css-styling/App.css';
import React from "react";
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact';
import Login from './pages/Login';


function App() {
  return (

  <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  </>

  );
}

export default App;
