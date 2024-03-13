import React from "react";
import { Container } from "react-bootstrap";
import tempImg from "../assets/sid.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "bootstrap/dist/css/bootstrap.min.css";

const ScrollingCarousel = ({ items }) => {
  const chunkSize = 3;
  const groupedItems = [];

  const itemsToShow = items.slice(1);
  const repeatedItems = itemsToShow.concat(itemsToShow).concat(itemsToShow);

  for (let i = 0; i < repeatedItems.length; i += chunkSize) {
    groupedItems.push(repeatedItems.slice(i, i + chunkSize));
  }

  return (
    <Container
      fluid
      style={{ backgroundColor: "#5E5E5E", position: "relative" }}
    >
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        centerMode={true}
        interval={3000}
        className="carousel text-light"
        showArrows={true}
        showStatus={false}
        showIndicators={false}
      >
        {groupedItems.map((chunk, index) => (
          <div key={index} className="carousel-item">
            {chunk.map((person, i) => (
              <div key={i} style={{ position: "relative" }}>
                <img
                  src={person.image}
                  alt="mentor-image"
                  className="rounded-circle mb-2"
                  style={{ width: "180px", height: "180px" }}
                />
                <div className="red-square position-absolute top-50 start-50"></div>
                <div>
                  <h3
                    className="fst-italic"
                    style={{ fontSize: "1.3rem", color: "white" }}
                  >
                    {person.name}
                  </h3>
                  <p
                    className="fst-italic fw-lighter"
                    style={{ fontSize: "1.1rem", color: "white" }}
                  >
                    {person.bio}
                  </p>
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
