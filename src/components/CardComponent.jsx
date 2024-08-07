import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardDeck } from 'reactstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CardComponent = ({ destinations }) => {
  return (
    <CardDeck className="p-4">
      {destinations.map((destination) => (
        <Card key={destination.name} className="card-custom">
          <LazyLoadImage
            alt={destination.name}
            height="100%"
            src={destination.image} // use normal <img> attributes as props
            width="100%"
            effect="blur"
          />
          <CardBody>
            <CardTitle tag="h5">{destination.name}</CardTitle>
            <CardText>{destination.review}</CardText>
            <CardText>
              <small className="text-muted">Rating: {destination.rating} Stars</small>
            </CardText>
          </CardBody>
        </Card>
      ))}
    </CardDeck>
  );
};

export default CardComponent;
