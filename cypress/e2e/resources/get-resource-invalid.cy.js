// cypress/integration/resources/get-resource-invalid.cy.js

import { getResourceInvalid } from '../utils/api-helpers';

describe('Get Resource API Tests - Invalid ID', () => {
    it('GET - Resource with invalid ID', () => {
        getResourceInvalid(23).then((response) => {
            if (response.status === 404) {
                expect(true).to.be.true;
            } else {
                expect(false).to.be.true;
            }
        });
    });
});