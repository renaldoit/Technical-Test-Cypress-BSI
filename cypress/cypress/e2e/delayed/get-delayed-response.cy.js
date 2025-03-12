// cypress/integration/delayed/get-delayed-response.cy.js

import { getDelayedResponse, validateUserSchema } from '../utils/api-helpers';

describe('Delayed Response API Tests', () => {
  it('GET - Delayed response with valid delay', () => {
    // reqres.in API menerima delay dalam detik
    const delay = 3; // 3 detik delay

    getDelayedResponse(delay).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.be.an('array');
      response.body.data.forEach(user => {
        validateUserSchema(user);
      });
    });
  });
});