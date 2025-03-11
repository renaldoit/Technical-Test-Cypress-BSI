// cypress/integration/resources/get-resource-valid.cy.js

import { getResource, validateResourceSchema } from '../utils/api-helpers';

describe('Get Resource API Tests - Valid ID', () => {
  it('GET - Resource with valid ID', () => {
    getResource(2).then((response) => {
      expect(response.status).to.eq(200);
      validateResourceSchema(response.body.data);
    });
  });
});