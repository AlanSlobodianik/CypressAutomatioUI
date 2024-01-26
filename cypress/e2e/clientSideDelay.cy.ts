describe('CLIENT SIDE DELAY',()=> {
    it('test', () => {
       // cy.visit('https://uitestingplayground.com/clientdelay');
        cy.visit(`${Cypress.env('base')}/clientdelay`);
        cy.get('#ajaxButton').should('be.visible').and('exist').click();
        cy.get('#spinner').should('be.visible').should('exist');
        cy.get('.bg-success').should('have.text','Data calculated on the client side.')
    })
})

//https://play1.automationcamp.ir/expected_conditions.html домашка на эту страницу
