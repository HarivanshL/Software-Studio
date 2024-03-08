//import {useState} from React
import '../css-styling/Home.css';
import React from 'react';
import Navbar from './Navbar';
import Linkbar from '../Components/Linkbar';

function Home() {
  /** 
   * TODO:
   * Add images and bios for mentors/professor
   * Fix navbar/Main Image
   * 
  */

  return (
    <>
      <Navbar />
      <div className = 'home-container'>
        <h1>Welcome to Software Studio</h1>
        <div className = 'home-div1'>
          <p>We're your gateway to hands-on training, portfolio building, and real-world experience in software development. Join our community to enhance your skills, boost your confidence, and prepare for success in the tech industry. Let's code the future together at Software Studio.</p>
        </div>
        <div className='linkbar'>
          <Linkbar />
        </div>
        <div className = 'team'>
          <div className='page-break'>
          <hr class="break-line"></hr>
          <h2>Meet Our Team</h2>
          <hr class="break-line"></hr>
          </div>
          <div className='proffesor'>
            <h3>Dr. Mansoor Abdulhak</h3>
            <p>About him</p>
          </div>
          <div className='mentors'>
            <div className='mentor'>
              <h1>Safia Mesiya</h1>
              <p>Bio</p>
            </div>
            <div className='mentor'>
              <h1>Nick Thompson</h1>
              <p>Bio</p>
            </div>
            <div className='mentor'>
              <h1>Matthew Agron</h1>
              <p>Bio</p>
            </div>
            <div className='mentor'>
              <h1>Brianna Patten</h1>
              <p>Bio</p>
            </div>
            <div className='mentor'>
              <h1>Harivansh Luchmun</h1>
              <p>Bio</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
