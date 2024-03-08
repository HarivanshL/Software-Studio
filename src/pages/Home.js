//import {useState} from React
import '../css-styling/Home.css';
import React from 'react';
import Navbar from './Navbar';
import Linkbar from '../components/Linkbar';
import PersonBioService from '../lib/services/PersonBio.service';
import PersonBio from "../components/PersonBio";
import { Container, Row, Col } from 'react-bootstrap';
import SSLogoImage from '../assets/ss-logo.png'

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
      <div className='home-container'>
        <h1>Welcome to Software Studio</h1>
        <div className='home-div1'>
          <p>We're your gateway to hands-on training, portfolio building, and real-world experience in software development. Join our community to enhance your skills, boost your confidence, and prepare for success in the tech industry. Let's code the future together at Software Studio.</p>
          <img src={SSLogoImage} alt="Introduction Photo" />
        </div>
        <div className='linkbar'>
          <Linkbar />
        </div>

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

        {        
          personsBios.map((personBio) => (
            <PersonBio key={personBio.id} personBioModel={personBio} />
          ))
        }


      </div>
    </>
  );
}

export default Home;
