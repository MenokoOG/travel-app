import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ items }) => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.altText} className="carousel-img" />
          <p className="legend">{item.caption}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
