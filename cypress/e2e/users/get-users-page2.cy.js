// cypress/integration/users/get-users-page2.cy.js

import { getUsers, validateUserSchema } from '../utils/api-helpers';

describe('Get Users API Tests - Page 2', () => {
  it('GET - List users on page 2', () => {
    getUsers(2).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.length(6);
      response.body.data.forEach(user => {
        validateUserSchema(user);
      });
    });
  });
});