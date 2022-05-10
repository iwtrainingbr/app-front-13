describe('testando o app', () => {
  beforeEach(() => {
    // cy.viewport('iphone-6');
    cy.viewport(1080, 1920);
    cy.visit('http://localhost:3000/team');
  });

  it('testando a pagina de listar times', () => {
    cy.contains('Wesley');

    cy.get('[data-cy="menu"]').click();

    cy.contains('Novo Coach').click();

    cy.get('[data-cy="coach-name"]').type('Jonas');
  })
})
