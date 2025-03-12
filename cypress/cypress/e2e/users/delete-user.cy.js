// cypress/integration/users/delete-user.cy.js

describe('Delete User API Tests', () => {
    it('DELETE - Delete user', () => {
      cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  });