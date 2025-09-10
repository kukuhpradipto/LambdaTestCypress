import { faker } from '@faker-js/faker';

function generateRandomData() {
  return {
    FirstName: faker.person.firstName(),
    LastName: faker.person.lastName(),
    EMail: faker.internet.email(),
    Telephone: `08${faker.string.numeric(10)}`,
    Password: faker.internet.password({ length: 12 })
  }
}

module.exports = generateRandomData(); // export function, bukan hasil
