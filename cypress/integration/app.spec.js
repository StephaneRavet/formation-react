describe('Home', () => {
    it('should contains links cliquable', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Login')
        cy.contains('Users').click()
        cy.url().should('eq', 'http://localhost:3000/users')
    })
})

describe('Login', () => {
    it('Bad Login', () => {
      cy.visit('http://localhost:3000')
      cy.get('[data-cy=login]').type('MonLogin')
      cy.get('[data-cy=password]').type('MonPassword')
      cy.get('[data-cy=submit').click()
      cy.url().should('eq', 'http://localhost:3000/')
    })
  
    it('Good Login', () => {
      cy.visit('http://localhost:3000')
      cy.get('[data-cy=login]').type('Bret')
      cy.get('[data-cy=password]').type('Bret')
      cy.get('[data-cy=submit').click()
      cy.url().should('eq', 'http://localhost:3000/profile/1')
    })
  })