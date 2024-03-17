import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Member(usermodel) {
  return (
    <>
    <Container fluid class = 'mt-3 mb-2'>
      <Row>
        <Col>
        <h1>{usermodel.firstname} {usermodel.lastname}</h1>
        <p>{usermodel.bio}</p>
        </Col>
      </Row>

    </Container>
    </>
  )
}

export default Member
