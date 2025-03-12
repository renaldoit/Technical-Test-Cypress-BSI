// cypress/integration/delayed/get-delayed-response-error.cy.js

import { getDelayedResponseError } from '../utils/api-helpers';

describe('Delayed Response API Error Tests', () => {
    it('GET - Delayed response with invalid delay - timeout', () => {
        const delay = 'invalid'; // Delay tidak valid
        const timeout = 3000; // 300ms timeout

        getDelayedResponseError(delay, timeout).then((response) => {
            if (response.status === 408) {
                // Timeout terjadi, tes dianggap "passed"
                expect(true).to.be.true;
            } else if (!response.status) {
                // Tidak ada respons (timeout), tes dianggap "passed"
                expect(true).to.be.true;
            } else {
                // Respons diterima, tes dianggap "failed"
                expect(false).to.be.true;
            }
        });
    });
});