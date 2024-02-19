describe('Login Page',()=>{
    beforeEach(()=>{
        cy.visit({
            url: 'click',
            method: 'GET'
        })
    })
    beforeEach(()=>{
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })
    it.skip('debug',()=>{
        cy.get('#badButton').debug().click()
    })
    it('pause',()=>{
        cy.pause()
        cy.get('#badButton').click()
        cy.pause()
        cy.get('#badButton').should('have.css','background-color', 'rgb(40, 167, 69)')
    })
})