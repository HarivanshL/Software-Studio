//import {useState} from React
import App from '../css-styling/App.css';
import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div id = 'home-container'>
        <h1>Welcome to Software Studio</h1>
        <div id = 'home-div1'>
          <p>We're your gateway to hands-on training, portfolio building, and real-world experience in software development. Join our community to enhance your skills, boost your confidence, and prepare for success in the tech industry. Let's code the future together at Software Studio.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
