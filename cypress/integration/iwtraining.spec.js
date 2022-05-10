describe('Iwtraining', () => {
  beforeEach(() => {
    cy.visit('http://iwtraining.com.br');
  });

  it ('testando o Wagner', () => {
    cy.get('.nld-avatar').click({multiple: true});

    cy.contains('Tudo bem sim').click();

    cy.get('#name').type('Jubileuda{enter}');
    cy.get('#phone').type('85 9 9733-1245{enter}');

    cy.wait(2000);
    cy.get('.nld-opt').first().click();


  });
});
