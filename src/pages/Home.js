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
      <Container className="mt-4">
        <Row className="my-auto">
          <Col>
            <Row>
              <h1 className="h3">Welcome to Software Studio</h1>
            </Row>
            <Row>
              <p>We're your gateway to hands-on training, portfolio building, and real-world experience in software development. Join our community to enhance your skills, boost your confidence, and prepare for success in the tech industry. Let's code the future together at Software Studio.</p>
            </Row>
          </Col>
          <Col className="text-center">
            <img src={SSLogoImage} alt="Introduction Photo" className="rounded-circle larger-image" />
          </Col>
        </Row>
      </Container>
      <div className='linkbar'>
        <Linkbar />

        {/*FIXME holy moly this chunk below is bad*/}
        <Container>
          <Row className="align-items-center">
            <Col xs={4} className="d-flex justify-content-end">
              <hr style={{ width: '50%' }} />
            </Col>
            <Col xs={4} className="text-center">
              <h2 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '1.5rem', margin: '0' }}>Meet our team</h2>
            </Col>
            <Col xs={4} className="d-flex justify-content-start">
              <hr style={{ width: '50%' }} />
            </Col>
          </Row>
        </Container>

           {/*
        <Container className='mentor-list'>
          {
            personsBios.map((personBio, index) => (

              personBio.bio !== "Leader" ? (
                <PersonBio key={personBio.id} personBioModel={personBio} />
              ) : (null)
            ))
          }
 
        </Container>
        */}
        <ScrollingCarousel  items={personsBios}/>


        



      </div>
    </>
  );
}

export default Home;
