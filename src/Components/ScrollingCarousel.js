import React from 'react';
import { Container } from 'react-bootstrap';
import tempImg from '../assets/sid.jpg'
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ScrollingCarousel = ({ items }) => {
    let personBios = items.slice(1);
  /*return (
    <Container>
      <Carousel>
        {personBios.map((person, index) => (
          <Carousel.Item key={index}>
            {/* Your carousel item content *//*}
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
  );*/

  return (
    <Carousel>
      {personBios.map((person, index) => (
        <div key={index}>
          <h2>{person.name}</h2>
          <p>{person.bio}</p>
          {/* Add any additional information you want to display */}
        </div>
      ))}
    </Carousel>
  );

};

export default ScrollingCarousel;
