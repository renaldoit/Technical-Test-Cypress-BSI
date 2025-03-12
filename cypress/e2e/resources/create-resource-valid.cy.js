// cypress/integration/resources/create-resource-valid.cy.js

import { createResource } from '../utils/api-helpers';

describe('Create Resource API Tests - Valid Data', () => {
  it('POST - Create resource with valid data', () => {
    const resourceData = {
      name: 'test',
      year: 2023,
      color: '#FFFFFF',
      pantone_value: '15-4020'
    };

    createResource(resourceData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.name).to.eq(resourceData.name);
    });
  });
});