/// <reference types="cypress" />

Cypress.Commands.add('loginKeycloak', (email?: string, password?: string) => {
  cy.origin(
    'https://app-login-rpk-dev.azurewebsites.net/',
    { args: { email, password } },
    ({ email, password }) => {
      cy.get('#username').type(email ?? 'email');
      cy.get('#password').type(password ?? 'test');
      cy.get('#kc-login').click();
    },
  );
});

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      loginKeycloak(email?: string, password?: string): Chainable<void>;
    }
  }
}

export {};
