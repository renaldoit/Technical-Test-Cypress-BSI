// cypress/integration/users/get-single-user-valid.cy.js

import { getSingleUser, validateUserSchema } from '../utils/api-helpers';

describe('Get Single User API Tests - Valid ID', () => {
  it('GET - Single user with valid ID', () => {
    getSingleUser(2).then((response) => {
      expect(response.status).to.eq(200);
      validateUserSchema(response.body.data);
    });
  });
});