describe('EXPECTED CONDITIONS', ()=>{
    beforeEach('visit web',()=>{
        cy.visit(`${Cypress.env('expected')}`)
    })
    it('alert test',()=>{
        cy.get('button#alert_trigger').click()
        cy.on('window:alert', str=>{
            expect(str).to.equal("I am alerting you!")
        })
        cy.on('window:confirm', el => true)
        cy.log('The alert is having the "ok" button')
        cy.get('#alert_handled_badge').should('have.text','Alert\n' +
            '                                handled')
    })
    it('promt test', ()=>{
        cy.get('button#prompt_trigger').click()
        cy.on('window:alert', str=>{
            expect(str).to.equal("Choose wisely...\\nIt's your life!")
            cy.on('window:confirm', el => true)
            cy.get('#alert_handled_badge').should('have.text','OK')
        })

    })
    it('visible element test',()=>{
        cy.get('#visibility_trigger').click()
        cy.get('#visibility_target.btn-danger').should('be.visible').should('exist')
        cy.get('#visibility_target.btn-danger').click()
        cy.get('.popover-body').should('have.text', 'I just removed my invisibility cloak!!')
    })
    it('spinner test',()=>{
        cy.get('#invisibility_target').should('be.visible').should('exist')
        cy.get('#invisibility_trigger').click()
        cy.get('#invisibility_target').should('not.be.visible').should('exist')

    })
    it('enabled button test',()=>{
        cy.contains('button', 'Disabled Button')
        cy.get('#enabled_trigger').click()
        cy.get('#enabled_target').should('have.css', 'background-color', 'rgb(63, 182, 24)')

    })
    it('title test',()=>{
        cy.title().should('eq', 'Wait Conditions')
        cy.get('#page_title_trigger').click()
        cy.title().should('eq', 'My New Title!')
    })
    it('change button value test',()=>{
        cy.get('#text_value_trigger').click()
        cy.contains('button','Submit')
        cy.get('#wait_for_value').should('have.value','Dennis Ritchie')
        cy.get('#wait_for_text').should('have.css', 'background-color', 'rgb(63, 182, 24)')
    })
    it('test frame button', ()=>{
        cy.get('#wait_for_frame').click()
        cy.iframe('iframe#frm').find('#inner_button')
            .should('be.visible')
            .should('have.text', 'Inner Button')
            .click()
            .should('have.text', 'Clicked')
     })
})