import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './css-styling/App.css';
import React from "react";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Members from './pages/Members'


function App() {
  return (

  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="members" element={<Members />} />
      </Routes>
    </Router>
  </>

  );
}

export default App;
