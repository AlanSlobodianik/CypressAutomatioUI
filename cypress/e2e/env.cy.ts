describe('ENV',()=>{
    it('stage',()=>{
        cy.visit(Cypress.env('stage'));
    });
    it('prod',()=>{
        cy.visit(Cypress.env('prod'));
    });
    it('проверка baseUrl',()=>{
        cy.visit(('/'));
    });

})