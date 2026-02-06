describe('Keycloak login', () => {
  beforeEach(() => {
    cy.session('user-session', () => {
      cy.visit(Cypress.env('baseUrl') + '/');
      cy.loginKeycloak('test@test.com', 'Bb12345*');
    });

    cy.viewport(1920, 1080);
  });

  it('Se accede a "/" tras loguearse a traves de Keycloak', () => {
    cy.visit('/');
  });
});
