// cypress/integration/delayed/get-delayed-response-error.cy.js

import { getDelayedResponse } from '../utils/api-helpers';

describe('Delayed Response API Error Tests', () => {
  it('GET - Delayed response with invalid delay', () => {
    // reqres.in API menerima delay dalam detik, bukan string
    const delay = 'invalid'; // Delay tidak valid

    getDelayedResponse(delay).then((response) => {
      // API reqres.in tetap memberikan response sukses walaupun delay invalid.
      // test ini akan gagal karena validasi yang tidak sesuai.
      expect(response.status).to.eq(400);
    });
  });
});