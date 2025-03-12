// cypress/integration/users/get-single-user-invalid.cy.js

import { getSingleUserInvalid } from '../utils/api-helpers';

describe('Get Single User API Tests - Invalid ID', () => {
    it('GET - Single user with invalid ID', () => {
        getSingleUserInvalid(23).then((response) => { // Menggunakan 23 sebagai contoh ID invalid
            if (response.status === 404) {
                // Respons 404, tes dianggap "passed"
                expect(true).to.be.true;
            } else {
                // Respons bukan 404, tes dianggap "failed"
                expect(false).to.be.true;
            }
        });
    });
});