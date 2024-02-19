import {homeWorkFramePage} from "../../pages/houmWork";

describe('HOMEWORK FRAME',()=>{
    before('',()=>{
        cy.visit(`${Cypress.env('frameHW')}`)
    })
    it('test frame',()=>{
        homeWorkFramePage.getInFrame()
    })
})
