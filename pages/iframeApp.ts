class IFrameApp{
    private iFrame:string = '#frame1'
    private body:string = 'body'
    private iframeChild:string = 'iframe'
    getIframe(){

    }
    visit(){
        cy.visit(`${Cypress.env('herokuApp')}/iframe`)
    }
    intersept(){
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    }
}

export const IframePageAppPage   = new IFrameApp()