describe('navigation', () => {
  it('Check home page', () => {
    cy.visit('/')
    cy.contains('CN Next starter')
    cy.contains('Stater project with Next and TypeScript.')
    cy.contains('Version: 0.0.1')
  })
})

export {}
