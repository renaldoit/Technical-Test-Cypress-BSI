// cypress/integration/resources/delete-resource.cy.js

import { deleteResource } from '../utils/api-helpers';

describe('Delete Resource API Tests', () => {
  it('DELETE - Delete resource', () => {
    deleteResource(2).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});