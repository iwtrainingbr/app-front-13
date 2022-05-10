//teste.spec.js
describe('Testar a pagina do facebook', () => {
  beforeEach(() => {
    cy.visit('https://facebook.com');
  });

  it ('teste da pagina de login', () => {
    cy.contains('O Facebook ajuda');

    cy.get('#email').type('wesley@email.com');

    cy.get('#pass').type('12345678');

    cy.get('[name="login"]').click();

    cy.contains('problem');
  });
});
