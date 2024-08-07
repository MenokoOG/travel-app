import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';

const FormComponent = ({ addReview }) => {
  const [destination, setDestination] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!destination) errors.destination = 'Destination is required';
    if (!review) errors.review = 'Review is required';
    if (!rating) errors.rating = 'Rating is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      addReview({ destination, review, rating });
      setDestination('');
      setReview('');
      setRating('');
    } else {
      setErrors(errors);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-md shadow-md">
      <FormGroup>
        <Label for="destination">Destination</Label>
        <Input
          type="text"
          name="destination"
          id="destination"
          placeholder="Enter destination name"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          invalid={!!errors.destination}
        />
        <FormFeedback>{errors.destination}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="review">Review</Label>
        <Input
          type="textarea"
          name="review"
          id="review"
          placeholder="Write your review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          invalid={!!errors.review}
        />
        <FormFeedback>{errors.review}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="rating">Rating</Label>
        <Input
          type="select"
          name="rating"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          invalid={!!errors.rating}
        >
          <option value="">Select rating</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </Input>
        <FormFeedback>{errors.rating}</FormFeedback>
      </FormGroup>
      <Button type="submit" color="primary" className="mt-2">Submit</Button>
    </Form>
  );
};

export default FormComponent;
