// cypress/integration/users/get-single-user-invalid.cy.js

import { getSingleUser } from '../utils/api-helpers';

describe('Get Single User API Tests - Invalid ID', () => {
  it('GET - Single user with invalid ID', () => {
    getSingleUser(2).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});