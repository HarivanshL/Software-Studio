import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Member({usermodel}) {
  return (
    <>
    <Container fluid className = 'mt-3 mb-2 text-center'>
      <Row>
        <Col>
        <h1>{usermodel.firstName} {usermodel.lastName}</h1>
        <p>{usermodel.bio}</p>
        </Col>
      </Row>

    </Container>
    </>
  )
}

export default Member
