describe('EXCEL',()=> {
    // it('reading excel', () => {
    //     cy.readingXlsx('cypress/fixtures/excelData.xlsx').then(data => {
    //         cy.log(data)
    //         cy.log(data[0])
    //     })
    // })
    // it('write data to json doc', () => {
    //     cy.readingXlsx('cypress/fixtures/excelData.xlsx').then(data => {
    //         cy.log(data)
    //         cy.log(data[0].data)
    //         cy.log(data[0].data[0])
    //         cy.log(data[0].data[0][0])
    //         let email = data[0].data[0][0]
    //         let password = data[0].data[0][1]
    //         cy.writeFile('cypress/fixtures/login.json', {
    //             email: Cypress.env('email'),
    //             password: Cypress.env('password')
    //         })
    //     })
    // })
    it('write data to json doc and use it to login', () => {
        cy.readingXlsx('cypress/fixtures/excelData.xlsx').then(data => {
            cy.log(data)
            cy.log(data[0])
            cy.log(data[0].data)
            cy.log(data[0].data[0])
            cy.log(data[0].data[0][0])
            cy.log(data[0].data[0][1])
            let email = data[0].data[0][0]
            let password = data[0].data[0][1]
            cy.writeFile('cypress/fixture/login.json', {
                email: Cypress.env('email'),
                password: Cypress.env('password')
            })
            cy.fixture('login.json').then(login => {
                cy.log(login)
                cy.apiLogin(login.email,login.password)
            })
        })
    })
})