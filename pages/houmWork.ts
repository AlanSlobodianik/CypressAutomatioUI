class homeWorkFrame {
    private iframe:string = '#frame1'
    private iframeChild:string = '#frame2'
    private iframeChild2:string = '#frame3'
    private iframeChild3:string = '#frame4'
    private body:string = 'body'
    private button:string = 'button'
    getInFrame(){
        cy.get(this.iframe).then(iframe=>{
            const body = iframe.contents().find(this.body)
            cy.wrap(body).should('include.text', 'Click Me 1')
            cy.wrap(body).find(this.button).click().and('have.text', 'Clicked')
            cy.wrap(body).find(this.iframeChild).then(iframeChild=>{
                const iFrameChild = iframeChild.contents().find(this.body)
                cy.wrap(iFrameChild).should('include.text', 'Click Me 2')
                cy.wrap(body).find(this.button).click().and('have.text', 'Clicked')
                cy.wrap(body).find(this.iframeChild2).then(iframeChild2 =>{
                    const iFrameChild2 = iframeChild2.contents().find(this.body)
                    cy.wrap(iFrameChild2).find(this.iframeChild3).then(iframeChild3=>{
                        const iFrameChild3 = iframeChild3.contents().find(this.body)
                        cy.wrap(iFrameChild3).should('include.text','Click Me 4')
                        cy.wrap(body).find(this.button).click().and('have.text', 'Clicked')
                    })
                })
            })
        })
    }
}
export const homeWorkFramePage = new homeWorkFrame()