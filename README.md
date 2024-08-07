

# Travel Destination Showcase

A web application to showcase and review travel destinations using Vite, React, and Reactstrap for styling. The application features a responsive design, dynamic data generation using Faker, and optimized performance with lazy-loaded images.

## Features

- Responsive Navbar with links to Home, Destinations, and Add Review pages.
- Carousel displaying featured travel destinations.
- Form to submit reviews for new travel destinations.
- Cards displaying travel destinations with images, reviews, and ratings.
- Button group to filter reviews by rating.
- Spinner for loading states.
- Fake data generation using Faker.
- Lazy loading images for optimized performance.

## Demo

![Travel Destination Showcase](./demo-screenshot.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/travel-destination-showcase.git
    cd travel-destination-showcase
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Install Tailwind CSS and initialize configuration:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── ButtonGroupComponent.jsx
│   │   ├── CardComponent.jsx
│   │   ├── CarouselComponent.jsx
│   │   ├── FormComponent.jsx
│   │   ├── NavbarComponent.jsx
│   │   ├── SpinnerComponent.jsx
│   ├── styles.css
│   ├── fakeData.js
│   ├── App.jsx
│   ├── index.jsx
│   ├── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── README.md
```

## Components

### NavbarComponent

- Responsive Navbar with links to different sections of the app.
- Located in `src/components/NavbarComponent.jsx`.

### CarouselComponent

- Carousel displaying featured travel destinations.
- Uses `react-responsive-carousel` for smooth transitions.
- Located in `src/components/CarouselComponent.jsx`.

### FormComponent

- Form for submitting reviews for new travel destinations.
- Includes validation for all fields.
- Located in `src/components/FormComponent.jsx`.

### CardComponent

- Cards displaying travel destinations with images, reviews, and ratings.
- Uses `react-lazy-load-image-component` for lazy loading images.
- Located in `src/components/CardComponent.jsx`.

### ButtonGroupComponent

- Button group for filtering reviews by rating.
- Located in `src/components/ButtonGroupComponent.jsx`.

### SpinnerComponent

- Spinner for displaying loading states.
- Located in `src/components/SpinnerComponent.jsx`.

## Customization

### Styles

Custom styles are defined in `src/styles.css`. You can update these styles or add new ones as needed.

### Fake Data

Fake data is generated using the Faker library in `src/fakeData.js`. You can customize the number of destinations or the properties of the generated data.

### Tailwind CSS

Tailwind CSS configuration is located in `tailwind.config.js`. You can customize the theme, add plugins, or extend the default styles as needed.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


