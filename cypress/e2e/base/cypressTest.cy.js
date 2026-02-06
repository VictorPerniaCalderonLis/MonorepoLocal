describe('Tests para comprobar correcto funcionamiento de Cypress', () => {
  it('Se accede a la URL base de cypress.config.js', () => {
    cy.visit('/');
  });
  it('Se espera pasar este test', () => {
    expect(true).to.equal(true);
  });
  it('Se espera NO pasar este test', () => {
    expect(true).to.equal(false);
  });
});
