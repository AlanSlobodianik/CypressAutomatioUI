import {LoginPage} from "../../pages/Login";
describe('COOKIES',()=>{
    beforeEach(()=>{
        cy.session('myCurrentSession',()=>{
            cy.visit(`${Cypress.env('demoQA')}/login`)
            LoginPage.submitButtonLogin()
        })
    })
    beforeEach(()=>{
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })

    it('create cookies with cy.session',()=>{
        cy.visit(`${Cypress.env('demoQA')}/login`)
        cy.url().then((url)=>{
            cy.log(url)
        })
    })
    it('create cookies with cy.session',()=>{
        cy.visit(`${Cypress.env('demoQA')}/login`)
        cy.wait(1000).contains('Log out')
    })
})