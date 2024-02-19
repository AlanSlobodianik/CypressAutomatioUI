import {TextBoxPage} from "../../pages/TextBox";
import {data} from "../../pages/helper";

describe('TEXT BOX PAGE',()=>{
    beforeEach(()=>{
        cy.intercept('GET', 'https://ads.example.com/**').as('adRequests');
        cy.visit(`${Cypress.env('demoQA')}/text-box`)
    })
    it('text box fields test',()=>{
        cy.get('#userName').type(data.fullName)
        cy.get('#userEmail').type(data.email)
        cy.get('#currentAddress').type(data.currentAddress)
        cy.get('#permanentAddress').type(data.permanentAddress)
        cy.get('#submit').click()
        cy.get('p#name').should('include.text', data.fullName)
        cy.get('p#email').should('include.text', data.email)
        cy.get('p#currentAddress').should('include.text', data.currentAddress)
        cy.get('p#permanentAddress').should('include.text', data.permanentAddress)
        // cy.wait('@apiRequest')
    })
    it('text box fields with PageObject', ()=>{
        TextBoxPage.submitBtn()
    })

})