const textName = 'Cypress'

describe('Text Input',()=>{
    it('text test', ()=>{
        cy.visit('/textinput')
        cy.title().should('eq','Text Input')
        cy.get('#newButtonName').type(textName)
        cy.get('#updatingButton').click() // 1 вариант
        //cy.contains('button','Button That Should').click() // 2 вариант
        cy.get('.btn-primary').then(element=>{
            console.log(element.text(), 'text')
            cy.log(element.text())
            cy.wrap(element).should('have.text',textName) //1 вариант
            cy.wrap(element.text()).should('eq',textName) //2 вариант
        })
        cy.get('.form-group').within(text=>{
            console.log(text.text(),'text')
            cy.get('[type="button"]').should('have.text',textName)
        })

    })
})

// спросить что такое Jquery