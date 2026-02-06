import './commands';

// Configuración global para todos los tests
beforeEach(() => {
  cy.viewport(1920, 1080);

  // Limpiar localStorage antes de cada test si es necesario
  // cy.clearLocalStorage();

  // Limpiar cookies si es necesario
  // cy.clearCookies();
});
