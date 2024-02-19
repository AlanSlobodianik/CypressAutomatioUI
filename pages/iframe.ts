class IFrame{
    private iFrame:string = '#frame1'
    private body:string = 'body'
    private iframeChild:string = 'iframe'

    getIframe(){
        cy.get(this.iFrame).then(iFrame=>{
            const body = iFrame.contents().find(this.body)
            cy.wrap(body).should('have.text', 'Parent frame')
            cy.wrap(body).find(this.iframeChild).then(iframeChild=>{
                const iFrameChild = iframeChild.contents().find(this.body)
                cy.wrap(iFrameChild).should('have.text', 'Child Iframe')
            })
        })
    }
    visit(){
        cy.visit(`${Cypress.env('demoQA')}/nestedframes`)
    }
    intersept(){
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    }
}

export const IframePage = new IFrame()