import { faker } from '@faker-js/faker';

export const generateFakeDestinations = (num) => {
  const destinations = [];

  for (let i = 0; i < num; i++) {
    destinations.push({
      name: faker.address.cityName(),
      review: faker.lorem.paragraph(),
      rating: faker.datatype.number({ min: 1, max: 5 }),
      image: faker.image.city(800, 600, true), // Generates a URL for a random city image
    });
  }

  return destinations;
};
