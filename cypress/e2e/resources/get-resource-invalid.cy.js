// cypress/integration/resources/get-resource-invalid.cy.js

import { getResource } from '../utils/api-helpers';

describe('Get Resource API Tests - Invalid ID', () => {
  it('GET - Resource with invalid ID', () => {
    getResource(23).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});