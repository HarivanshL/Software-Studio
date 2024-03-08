import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import tempImg from '../assets/sid.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ScrollingCarousel = ({ items }) => {
    let personBios = items.slice(1);
  return (
    <Container>
      <Carousel>
        {personBios.map((person, index) => (
          <Carousel.Item key={index}>
            {/* Your carousel item content */}
            <img
              className="d-block w-10"
              src={tempImg}
              alt="mentor-image"
            />
            <Carousel.Caption>
              <h3>{person.name}</h3>
              <p>{person.bio}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default ScrollingCarousel;
