// cypress/integration/users/update-user-patch.cy.js

describe('Update User API Tests - PATCH', () => {
    it('PATCH - Partially update user', () => {
      cy.request('PATCH', 'https://reqres.in/api/users/2', {
        job: 'zion resident'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.job).to.eq('zion resident');
        expect(response.body).to.have.property('updatedAt');
      });
    });
  });