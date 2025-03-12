// cypress/integration/users/get-users-page1.cy.js

import { getUsers, validateUserSchema } from '../utils/api-helpers';

describe('Get Users API Tests - Page 1', () => {
  it('GET - List users on page 1', () => {
    getUsers(1).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.length(6);
      response.body.data.forEach(user => {
        validateUserSchema(user);
      });
    });
  });
});