import React from 'react';
import { Container } from 'react-bootstrap';
import tempImg from '../assets/sid.jpg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ScrollingCarousel = ({ items }) => {
  const chunkSize = 3;
  const groupedItems = [];
  
  // Repeat the items array to create an endless loop effect
  const repeatedItems = items.concat(items).concat(items);

  for (let i = 0; i < repeatedItems.length; i += chunkSize) {
    groupedItems.push(repeatedItems.slice(i, i + chunkSize));
  }

  return (
    <Container>
      <Carousel autoPlay infiniteLoop showThumbs={false} centerMode={true} interval={3000} className="carousel" showArrows={true} showStatus={false} showIndicators={false}>
        {groupedItems.map((chunk, index) => (
          <div key={index} className="carousel-item">
            {chunk.map((person, i) => (
              <div key={i}>
                <img src={person.image} alt="mentor-image" />
                <div>
                  <h3>{person.name}</h3>
                  <p>{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </Container>
  );
};



export default ScrollingCarousel;
