import {data} from "./helper";

class TextBox {
    fullName: string = '#userName'
    email:string = '#userEmail'
    currentAddress:string = '#currentAddress'
    permanentAddress:string = '#permanentAddress'
    submitButton:string = '#submit'
    validateFullName:string = 'p#name'
    validateEmail: string = 'p#email'
    validateCurrentAddress:string = 'p#currentAddress'
    validatePermanentAddress:string = 'p#permanentAddress'


    submitBtn(){
        cy.get(this.fullName).type(data.fullName)
        cy.get(this.email).wait(1000).type(data.email)
        cy.get(this.currentAddress).type(data.currentAddress)
        cy.get(this.permanentAddress).type(data.permanentAddress)
        cy.get(this.submitButton).click()
        cy.get(this.validateFullName).should('include.text', data.fullName)
        cy.get(this.validateEmail).should('include.text', data.email)
        cy.get(this.validateCurrentAddress).should('include.text', data.currentAddress)
        cy.get(this.validatePermanentAddress).should('include.text', data.permanentAddress)

    }

}


export const TextBoxPage = new TextBox()