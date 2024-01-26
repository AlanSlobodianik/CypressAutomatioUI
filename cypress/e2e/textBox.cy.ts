describe('test textBox', ()=>{
    it('test', ()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.get('#userName').type('Buga Buga')
        cy.get('#userEmail').type('test@test.com')
        cy.get('#currentAddress').type('Apple Valley')
        cy.get('#permanentAddress').type('Apple Valley2')
        cy.get('#submit').click()
    })
    it('test2', ()=>{
        cy.visit('https://demoqa.com/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#rightClickBtn').rightclick()
        //cy.get('//button[text()="Click Me"]').click()
    })
    it('test3',()=>{
        cy.visit('https://demoqa.com/checkbox')
        cy.get('.rct-checkbox').click()
        cy.get('.rct-option.rct-option-expand-all').click()
        cy.get('.rct-option.rct-option-collapse-all').click()

    })
} )