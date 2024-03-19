import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Member({usermodel}) {
  return (
    <>
    <Container fluid className = 'mt-3 mb-2 text-left'>
      <Row>
        <Col>
        <h1 className='text-left'>{usermodel.firstName} {usermodel.lastName}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>{usermodel.bio}</p>
</Col>
      <Col>
        <p>Role: {usermodel.role}</p>
        </Col>
        <Col>
        <p>Socials:</p>
        </Col>
      </Row>

    </Container>
    </>
  )
}

export default Member
