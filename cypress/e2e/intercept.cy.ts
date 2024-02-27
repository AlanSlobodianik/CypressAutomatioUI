import {LoginPage} from "../../pages/Login";
import exp = require("constants");
import progress = Mocha.reporters.progress;

describe('INTERCEPT',()=> {
    beforeEach(()=>{
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })
    it('network request spy', function () {
        cy.intercept('POST', '*/login').as('login')
        cy.intercept('https://server-stage.pasv.us/course/coursesProgress/655982d02286f89d1055b5ca',
            {fixture:'progress.json'}).as('course')
        cy.visit(`${Cypress.env('localCoding')}/user/login`)
        cy.get('#normal_login_email').type(Cypress.env('email'))
        cy.get('#normal_login_password').type(Cypress.env('password'),{log:false})
        cy.get('button[type="submit"]').click()
        cy.wait('@login').then(res=>{
            console.log(res,'res')
            let id = res.response.body.payload.user._id
            cy.location().should(loc=>{
                console.log(loc,'loc')
                expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`)
                expect(res.response.statusCode).to.eq(200)
            })
        })
        cy.visit('https://stage.pasv.us/profile/655982d02286f89d1055b5ca/progress')
        cy.wait('@course').then(el=>{
            console.log(el.response.body,'el')
            cy.wrap(this.data).should('deep.equal', el.response.body)

        })
    })
})