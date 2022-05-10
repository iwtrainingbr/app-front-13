describe('Google', () => {
  beforeEach(() => {
    cy.visit('http://google.com');
  });

  it ('buscando pela comuna', () => {
    cy.get('[name="q"]').type('PHP com Rapadura{enter}');

    cy.contains('comunidade');
  });
});
