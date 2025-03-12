// cypress/integration/auth/login-successful.cy.js

import { loginUser, validateLoginSuccessfulResponse } from '../utils/api-helpers';

describe('Login API Tests - Successful', () => {
  it('POST - Login successful', () => {
    const userData = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };

    loginUser(userData).then((response) => {
      validateLoginSuccessfulResponse(response);
    });
  });
});