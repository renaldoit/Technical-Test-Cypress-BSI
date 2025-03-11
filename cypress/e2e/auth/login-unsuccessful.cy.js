// cypress/integration/auth/login-unsuccessful.cy.js

import { loginUser, validateLoginUnsuccessfulResponse } from '../utils/api-helpers';

describe('Login API Tests - Unsuccessful', () => {
  it('POST - Login unsuccessful - missing password', () => {
    loginUser({ email: 'eve.holt@reqres.in' }).then((response) => {
      validateLoginUnsuccessfulResponse(response);
    });
  });
});