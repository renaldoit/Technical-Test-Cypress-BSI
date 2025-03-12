// cypress/integration/auth/register-unsuccessful.cy.js

import { registerUser } from '../utils/api-helpers';

describe('Register API Tests - Unsuccessful', () => {
  it('POST - Register unsuccessful - missing password', () => {
    registerUser({ email: 'eve.holt@reqres.in' }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error', 'Missing password');
    });
  });
});