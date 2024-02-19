
describe('Login Page',()=>{
    beforeEach(()=>{
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })
    beforeEach(()=>{
        cy.visit(`${Cypress.env('demoQA')}/login`)
    })
    it('login',()=>{
        // cy.get('#userName').type('test')
        // cy.get('#password').type('Test1234*')
        // cy.get('#login').click()
        cy.login('test', 'Test1234*')
        cy.contains('Log out')

    })
})