// cypress/integration/auth/register-successful.cy.js

import { registerUser } from '../utils/api-helpers';

describe('Register API Tests - Successful', () => {
  it('POST - Register successful', () => {
    const userData = {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    };

    registerUser(userData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('token');
    });
  });
});