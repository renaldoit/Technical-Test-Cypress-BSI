// cypress/integration/users/create-user-invalid.cy.js

import { createUser } from '../utils/api-helpers';

describe('Create User API Tests - Invalid Data', () => {
  it('POST - Create user with missing data', () => {
    createUser({}).then((response) => {
      expect(response.status).to.eq(201); // API still returns 201 even with missing data
      expect(response.body).to.have.property('id');
    });
  });
});