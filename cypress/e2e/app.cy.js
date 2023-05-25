describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3001/')
    cy.get('h1').should('contain.text', 'Créer un composant select accessible');
    cy.get('select').select('Japonais').should('have.value', 'jap')

    cy.get('select').click()
  })
})
