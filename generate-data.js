// generate-data.js
import { faker } from '@faker-js/faker';
import { writeFileSync } from 'fs';

const generateProducts = () => {
  const products = [];

  for (let i = 1; i <= 50; i++) {
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price(100, 1000, 2)),
      description: faker.commerce.productDescription(),
      category: faker.commerce.department(),
      image: `https://picsum.photos/400/400?random=${i}`,
      rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
      inStock: faker.datatype.boolean(),
      fastDelivery: faker.datatype.boolean(),
      tags: faker.helpers.arrayElements(['sale', 'new', 'popular'], 2),
      brand: faker.company.name()
    });
  }

  return products;
};

const generateCategories = () => {
  const categories = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Books',
    'Sports',
    'Beauty',
    'Toys',
    'Automotive'
  ];

  return categories.map((name, index) => ({
    id: index + 1,
    name: name,
    slug: name.toLowerCase().replace(/ /g, '-')
  }));
};

const generateUsers = () => {
  const users = [];

  for (let i = 1; i <= 10; i++) {
    users.push({
      id: i,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        zipCode: faker.location.zipCode()
      }
    });
  }

  return users;
};

const db = {
  products: generateProducts(),
  categories: generateCategories(),
  users: generateUsers(),
  cart: [],
  orders: []
};

writeFileSync('db.json', JSON.stringify(db, null, 2));
console.log('✅ Mock data generated successfully!');
console.log('📁 File: db.json');
console.log('📊 Products:', db.products.length);
console.log('📁 Categories:', db.categories.length);
console.log('👥 Users:', db.users.length);
