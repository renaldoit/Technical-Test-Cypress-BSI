// cypress/integration/utils/api-helpers.js

// Users API Helpers
export const getUsers = (page = 1) => {
  return cy.request('GET', `https://reqres.in/api/users?page=${page}`);
};

export const getSingleUser = (userId) => {
  return cy.request('GET', `https://reqres.in/api/users/${userId}`);
};

export const createUser = (userData) => {
  return cy.request('POST', 'https://reqres.in/api/users', userData);
};

export const updateUser = (userId, userData) => {
  return cy.request('PUT', `https://reqres.in/api/users/${userId}`, userData);
};

export const partiallyUpdateUser = (userId, userData) => {
  return cy.request('PATCH', `https://reqres.in/api/users/${userId}`, userData);
};

export const deleteUser = (userId) => {
  return cy.request('DELETE', `https://reqres.in/api/users/${userId}`);
};

// Authentication API Helpers
export const registerUser = (userData) => {
  return cy.request('POST', 'https://reqres.in/api/register', userData);
};

export const loginUser = (userData) => {
  return cy.request('POST', 'https://reqres.in/api/login', userData);
};

// Resources API Helpers
export const getResource = (resourceId) => {
  return cy.request('GET', `https://reqres.in/api/unknown/${resourceId}`);
};

export const createResource = (resourceData) => {
  return cy.request('POST', 'https://reqres.in/api/unknown', resourceData);
};

export const updateResource = (resourceId, resourceData) => {
  return cy.request('PUT', `https://reqres.in/api/unknown/${resourceId}`, resourceData);
};

export const deleteResource = (resourceId) => {
  return cy.request('DELETE', `https://reqres.in/api/unknown/${resourceId}`);
};

// Delayed Response API Helpers
export const getDelayedResponse = (delay) => {
  return cy.request('GET', `https://reqres.in/api/users?delay=${delay}`);
};

// Validation Helpers
export const validateUserSchema = (user) => {
  expect(user).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');
};

export const validateResourceSchema = (resource) => {
  expect(resource).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value');
};

export const validateLoginSuccessfulResponse = (response) => {
  expect(response.status).to.eq(200);
  expect(response.body).to.have.property('token');
};

export const validateLoginUnsuccessfulResponse = (response) => {
  expect(response.status).to.eq(400);
  expect(response.body).to.have.property('error', 'Missing password');
};