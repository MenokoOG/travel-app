import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';

const ButtonGroupComponent = ({ filterReviews }) => {
  return (
    <ButtonGroup className="mb-4">
      <Button color="primary" onClick={() => filterReviews('all')}>All</Button>
      <Button color="secondary" onClick={() => filterReviews(5)}>5 Stars</Button>
      <Button color="secondary" onClick={() => filterReviews(4)}>4 Stars</Button>
      <Button color="secondary" onClick={() => filterReviews(3)}>3 Stars</Button>
      <Button color="secondary" onClick={() => filterReviews(2)}>2 Stars</Button>
      <Button color="secondary" onClick={() => filterReviews(1)}>1 Star</Button>
    </ButtonGroup>
  );
};

export default ButtonGroupComponent;
