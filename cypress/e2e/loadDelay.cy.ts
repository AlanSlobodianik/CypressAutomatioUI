describe('LOAD DELAY',()=>{
    it('load delay emulate failed',()=>{
        cy.visit(Cypress.env('base'), {timeout: 0});
    });
    it('load delay emulate',()=>{
        cy.visit(Cypress.env('base'), {timeout: 2_000});
        cy.get('[href="/loaddelay"]',{timeout: 4_000}).click();
        cy.contains('button', 'Button Appearing After Delay')
    });
})