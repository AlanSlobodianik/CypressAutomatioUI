import {LoginPage} from "../../pages/Login";

describe('Login Page',()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env('demoQA')}/login`)
    })
    it('login test', ()=>{
        cy.get('#userName').type('test')
        cy.get('#password').type('Test1234*')
        cy.get('#login').click()
        // cy.get('#submit').click()
        cy.contains('Log out').click()
    })
    it('login with PageObject', ()=>{
        LoginPage.submitButtonLogin()
    })
})