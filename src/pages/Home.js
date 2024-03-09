//import {useState} from React
import '../css-styling/Home.css';

import Navbar from './Navbar';
import Linkbar from '../Components/Linkbar';
import PersonBioService from '../lib/services/PersonBio.service';
import PersonBio from "../Components/PersonBio";
import { Container, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import SSLogoImage from '../assets/ss-logo.png'
import ScrollingCarousel from '../Components/ScrollingCarousel';


function Home() {
  /** 
   * TODO:
   * Add images and bios for mentors/professor
   * Fix navbar/Main Image
   * 
  */

  const personsBios = PersonBioService.getAllPersonBios();
  return (
    <>
      <Navbar />
      <Container fluid style={{ backgroundColor: "#F8F7F0" }}>
        <Row className="my-auto">
          <Col>
            <Row>
              <h1 className="h3 p-2 mt-4 ms-5 mb-0">Welcome to Software Studio</h1>
            </Row>
            <Row>
              <p className="p-2 ms-5 mt-0">We're your gateway to hands-on training, portfolio building, and real-world experience in software development. Join our community to enhance your skills, boost your confidence, and prepare for success in the tech industry. Let's code the future together at Software Studio.</p>
            </Row>
          </Col>
          <Col className="text-center">
            <img src={SSLogoImage} alt="Introduction Photo" className="rounded-circle larger-image mt-4 mb-4 ms-4" />
          </Col>
        </Row>
      </Container>
      <div className='linkbar'>
        <Linkbar />

        {/*FIXME holy moly this chunk below is bad*/}
        <Container fluid style={{ backgroundColor: "#5E5E5E" }}>
          <Row className="align-items-center">
            <Col xs={4} className="d-flex justify-content-end text-light">
              <hr style={{ width: '80%',borderWidth: '3px'}} />
            </Col>
            <Col xs={4} className="text-center mt-4 mb-4 text-light">
              <h2 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '1.7rem', margin: '0'}}>Meet our team</h2>
            </Col>
            <Col xs={4} className="d-flex justify-content-start text-light">
              <hr style={{ width: '80%',borderWidth: '3px' }} />
            </Col>
          </Row>
        </Container>

        <Container fluid style={{ backgroundColor: "#5E5E5E" }}>
          {
            personsBios.map((personBio, index) => (
              personBio.bio === "Leader" ? (
                <div key={personBio.id} className="person-bio text-center text-light mb-5" style={{ marginBottom: '1rem' }}>
                  <img src={personBio.image} alt={personBio.name} className="photo rounded-circle mb-1" style={{ width: '90px', height: '90px' }} />
                  <div className="name" style={{ fontStyle: 'italic', fontSize: '1.1rem', fontWeight: 'bold' }}>{personBio.name}</div>
                  <div className="bio" style={{ fontStyle: 'italic', fontSize: '1rem' }}>{personBio.bio}</div>
                </div>
              ) : null
            ))
          }


<h2 className="carousel-title text-light" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Mentors</h2>
          <ScrollingCarousel items={personsBios} />
          <h2 className="carousel-title text-light mt-4" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Exec Team</h2>
          <ScrollingCarousel items={personsBios} />
        </Container>





      </div>
    </>
  );
}

export default Home;
