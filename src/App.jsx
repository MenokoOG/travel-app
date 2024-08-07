import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import CarouselComponent from './components/CarouselComponent';
import FormComponent from './components/FormComponent';
import CardComponent from './components/CardComponent';
import ButtonGroupComponent from './components/ButtonGroupComponent';
import SpinnerComponent from './components/SpinnerComponent';
import { generateFakeDestinations } from './fakeData';

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredReviews, setFilteredReviews] = useState([]);

  useEffect(() => {
    const fakeData = generateFakeDestinations(10);
    setReviews(fakeData);
    setFilteredReviews(fakeData);
  }, []);

  const addReview = (review) => {
    setLoading(true);
    setTimeout(() => {
      setReviews((prevReviews) => [...prevReviews, review]);
      setFilteredReviews((prevReviews) => [...prevReviews, review]);
      setLoading(false);
    }, 1000);
  };

  const filterReviews = (rating) => {
    if (rating === 'all') {
      setFilteredReviews(reviews);
    } else {
      setFilteredReviews(reviews.filter((review) => review.rating == rating));
    }
  };

  return (
    <Router>
      <div>
        <NavbarComponent />
        {loading && <SpinnerComponent />}
        <Routes>
          <Route path="/" element={<CarouselComponent items={filteredReviews.slice(0, 3)} />} />
          <Route
            path="/destinations"
            element={
              <div className="container">
                <ButtonGroupComponent filterReviews={filterReviews} />
                <CardComponent destinations={filteredReviews.length > 0 ? filteredReviews : reviews} />
              </div>
            }
          />
          <Route path="/add-review" element={<FormComponent addReview={addReview} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
