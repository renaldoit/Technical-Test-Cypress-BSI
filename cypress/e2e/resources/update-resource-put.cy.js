// cypress/integration/resources/update-resource-put.cy.js

import { updateResource } from '../utils/api-helpers';

describe('Update Resource API Tests - PUT', () => {
  it('PUT - Update resource with valid data', () => {
    const resourceData = {
      name: 'updated test',
      year: 2024,
      color: '#000000',
      pantone_value: '19-0303'
    };

    updateResource(2, resourceData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(resourceData.name);
      expect(response.body.year).to.eq(resourceData.year);
    });
  });
});