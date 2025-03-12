// cypress/integration/users/update-user-put.cy.js

describe('Update User API Tests - PUT', () => {
    it('PUT - Update user with valid data', () => {
      cy.request('PUT', 'https://reqres.in/api/users/2', {
        name: 'morpheus',
        job: 'zion resident'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('morpheus');
        expect(response.body.job).to.eq('zion resident');
        expect(response.body).to.have.property('updatedAt');
      });
    });
  });