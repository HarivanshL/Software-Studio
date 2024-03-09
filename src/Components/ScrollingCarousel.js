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
    <Container fluid style={{ backgroundColor: "#5E5E5E" }}>
      <Carousel autoPlay infiniteLoop showThumbs={false} centerMode={true} interval={3000} className="carousel text-light" showArrows={true} showStatus={false} showIndicators={false}>
        {groupedItems.map((chunk, index) => (
          <div key={index} className="carousel-item">
            {chunk.map((person, i) => (
              <div key={i}>
                <img src={person.image} alt="mentor-image" className="rounded-circle mb-2" style={{ width: '90px', height: '90px' }} />
                <div>
                  <h3 style ={{fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.1rem'}}>{person.name}</h3>
                  <p  style ={{fontStyle: 'italic', fontSize: '1rem'}} >{person.bio}</p>
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
