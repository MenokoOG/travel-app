## **Project Overview:**

### **Project Overview:**

Create a web application to showcase and review travel destinations using the Vite React environment and Reactstrap for styling. This project will help you practice implementing and using various Reactstrap components to build a responsive and visually appealing interface focused on travel destinations.

## **Resources:**

- [Reactstrap Documentation](https://reactstrap.github.io/)
- [Bootstrap Documentation](https://getbootstrap.com/)

## **Project Requirements:**

1. **Setup:**
    - Initialize a new Vite React project.
    - Install Reactstrap and Bootstrap:
        
        ```bash
        npm install reactstrap bootstrap
        ```
        
    - Import Bootstrap CSS in your `main.jsx` or `index.jsx`:
        
        ```jsx
        import 'bootstrap/dist/css/bootstrap.min.css';
        ```
        
2. **App Structure:**
    - Create the following components in the `src` directory:
        - `NavbarComponent.jsx`
        - `CarouselComponent.jsx`
        - `FormComponent.jsx`
        - `CardComponent.jsx`
        - `ButtonGroupComponent.jsx`
        - `SpinnerComponent.jsx`
3. **Navbar Component:**
    - Implement a responsive Navbar using Reactstrap’s `Navbar` component.
    - Include links to different sections of the app (e.g., Home, Destinations, Add Review).
4. **Carousel Component:**
    - Implement a Carousel using Reactstrap’s `Carousel` component.
    - Include at least three slides with images of travel destinations and captions.
5. **Form Component:**
    - Implement a form using Reactstrap’s `Form` and `Input` components.
    - Include fields for destination name, review, and rating (out of 5) with a submit button.
6. **Card Component:**
    - Implement a set of cards using Reactstrap’s `Card` component.
    - Each card should display an image of the destination, name, review text, and a rating.
7. **Button Group Component:**
    - Implement a button group using Reactstrap’s `ButtonGroup` and `Button` components.
    - Include buttons to filter reviews by rating (e.g., All, 5 Stars, 4 Stars, etc.).
8. **Spinner Component:**
    - Implement a spinner using Reactstrap’s `Spinner` component.
    - Display the spinner while the application is loading or when submitting a review.
9. **Routing:**
    - Set up routing using `react-router-dom` to navigate between different pages (Home, Destinations, Add Review).
10. **Integration:**
    - Integrate all the components into a cohesive application.
    - Ensure that the Navbar links work correctly and navigate to the appropriate sections.
    - Use state management to handle form submissions and display the spinner during loading states.

## **Bonus Features:**

- Add custom styling to the Reactstrap components to enhance the appearance of the app.
- Implement form validation using Reactstrap's validation utilities.

### **Step-by-Step Instructions:**

### **1. Project Setup:**

1. **Initialize a Vite Project:**

    ```bash
    npm create vite@latest travel-app --template react
    cd travel-app
    npm install
    ```

2. **Install Reactstrap and Bootstrap:**

    ```bash
    npm install reactstrap bootstrap
    ```

3. **Import Bootstrap CSS in `main.jsx` or `index.jsx`:**

    ```jsx
    import 'bootstrap/dist/css/bootstrap.min.css';
    ```

### **2. Create Components:**

**2.1 NavbarComponent.jsx:**

```jsx
import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavbarComponent = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Travel Destinations</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/destinations">Destinations</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/add-review">Add Review</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
```

**2.2 CarouselComponent.jsx:**

```jsx
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'image1.jpg',
    altText: 'Slide 1',
    caption: 'Travel Destination 1',
  },
  {
    src: 'image2.jpg',
    altText: 'Slide 2',
    caption: 'Travel Destination 2',
  },
  {
    src: 'image3.jpg',
    altText: 'Slide 3',
    caption: 'Travel Destination 3',
  },
];

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default CarouselComponent;
```

**2.3 FormComponent.jsx:**

```jsx
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const FormComponent = () => {
  const [destination, setDestination] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ destination, review, rating });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="destination">Destination</Label>
        <Input
          type="text"
          name="destination"
          id="destination"
          placeholder="Enter destination name"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
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
        />
      </FormGroup>
      <FormGroup>
        <Label for="rating">Rating</Label>
        <Input
          type="select"
          name="rating"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Select rating</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </Input>
      </FormGroup>
      <Button type="submit" color="primary">Submit</Button>
    </Form>
  );
};

export default FormComponent;
```

**2.4 CardComponent.jsx:**

```jsx
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const CardComponent = ({ destination }) => {
  return (
    <Card>
      <CardImg top width="100%" src={destination.image} alt={destination.name} />
      <CardBody>
        <CardTitle tag="h5">{destination.name}</CardTitle>
        <CardText>{destination.review}</CardText>
        <CardText>
          <small className="text-muted">Rating: {destination.rating} Stars</small>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
```

**2.5 ButtonGroupComponent.jsx:**

```jsx
import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';

const ButtonGroupComponent = ({ filterReviews }) => {
  return (
    <ButtonGroup>
      <Button onClick={() => filterReviews('all')}>All</Button>
      <Button onClick={() =>

 filterReviews(5)}>5 Stars</Button>
      <Button onClick={() => filterReviews(4)}>4 Stars</Button>
      <Button onClick={() => filterReviews(3)}>3 Stars</Button>
      <Button onClick={() => filterReviews(2)}>2 Stars</Button>
      <Button onClick={() => filterReviews(1)}>1 Star</Button>
    </ButtonGroup>
  );
};

export default ButtonGroupComponent;
```

**2.6 SpinnerComponent.jsx:**

```jsx
import React from 'react';
import { Spinner } from 'reactstrap';

const SpinnerComponent = () => {
  return (
    <div className="text-center">
      <Spinner color="primary" />
    </div>
  );
};

export default SpinnerComponent;
```

### **3. Setup Routing:**

**3.1 Install `react-router-dom`:**

```bash
npm install react-router-dom
```

**3.2 Configure Routing in `App.jsx`:**

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import CarouselComponent from './CarouselComponent';
import FormComponent from './FormComponent';
import CardComponent from './CardComponent';
import ButtonGroupComponent from './ButtonGroupComponent';
import SpinnerComponent from './SpinnerComponent';

const App = () => {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={CarouselComponent} />
          <Route path="/destinations" component={CardComponent} />
          <Route path="/add-review" component={FormComponent} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

### **4. Integrate Components:**

**4.1 Update `CardComponent.jsx` to render multiple cards:**

```jsx
import React from 'react';
import { CardDeck } from 'reactstrap';
import CardComponent from './CardComponent';

const destinations = [
  {
    name: 'Paris',
    review: 'Beautiful city with amazing landmarks.',
    rating: 5,
    image: 'paris.jpg',
  },
  {
    name: 'New York',
    review: 'The city that never sleeps.',
    rating: 4,
    image: 'newyork.jpg',
  },
  {
    name: 'Tokyo',
    review: 'A perfect blend of tradition and modernity.',
    rating: 5,
    image: 'tokyo.jpg',
  },
];

const CardContainer = () => {
  return (
    <CardDeck>
      {destinations.map((destination) => (
        <CardComponent key={destination.name} destination={destination} />
      ))}
    </CardDeck>
  );
};

export default CardContainer;
```

### **Bonus Features:**

1. **Custom Styling:**

Add additional CSS or use Tailwind CSS to further enhance the appearance of your app.

2. **Form Validation:**

Add validation to the `FormComponent` to ensure that all fields are filled out correctly before submission.

This completes the project setup and integration steps for your travel destination showcase app using Reactstrap and Vite.