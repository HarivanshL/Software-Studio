import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './css-styling/App.css';
import React from "react";
import Home from './pages/Home'
import Navbar from './pages/Navbar'


function App() {
  return (

      <div className="App">
        <Navbar />
        <Router>
        {/*Insert NavBar*/}
        {/*Insert more paths as needed*/}

        <Routes>
          <Route path="/" element={<Home />} />
          {/*
        <Route path="/login" element={<Login />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/members" element={<Members />} />
          */}
        </Routes>

        {/*Conditional rendering of components based on login status*/}
        </Router>
      </div>

  );
}

export default App;
