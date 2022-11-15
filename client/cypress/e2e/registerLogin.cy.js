/// <reference types="cypress"/>
describe('Register test', () => {
  it('Register user test',()=>{
    cy.visit('http://localhost:3000/register')
    cy.contains('Project Managment')
    cy.get('[type="text"]').type('newUser')
    cy.get('[type="email"]').type('newuser@new.com')
    cy.get('[type="password"]').type('12345')
    cy.get('[type="submit"]').click()
  })
})
describe('Login test',()=>{
    it('Login user test',()=>{
        cy.visit('http://localhost:3000/login')
        cy.contains('Project Managment')
        cy.get('[type="email"]').type('newuser@new.com')
        cy.get('[type="password"]').type('12345')
        cy.get('[type="submit"]').click()
    })
    it('Logout test',()=>{
        cy.visit('http://localhost:3000/login')
        cy.contains('Project Managment')
        cy.get('[type="email"]').type('newuser@new.com')
        cy.get('[type="password"]').type('12345')
        cy.get('[type="submit"]').click()
        cy.get('[class="logout"]').click()
    })
})