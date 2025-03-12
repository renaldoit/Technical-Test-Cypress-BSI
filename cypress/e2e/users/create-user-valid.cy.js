// cypress/integration/users/create-user-valid.cy.js

import { createUser } from '../utils/api-helpers';

describe('Create User API Tests - Valid Data', () => {
  it('POST - Create user with valid data', () => {
    const userData = {
      name: 'John Doe',
      job: 'Software Engineer'
    };

    createUser(userData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.name).to.eq(userData.name);
    });
  });
});