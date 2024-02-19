import {IframePage} from "../../pages/iframe";
import {IframePageAppPage} from "../../pages/iframeApp";

// describe('IFRAME', ()=>{
//     beforeEach('', ()=>{
//         IframePage.visit()
//         IframePage.intersept()
//     })
//     it('test iframe',()=>{
//         IframePage.getIframe()
//     })
// })
describe('IFRAMEAPP',()=>{
    beforeEach('', ()=>{
        IframePageAppPage.visit()
        IframePageAppPage.intersept()
    })
    it('test iframe with extention',()=>{
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').then(iframeApp=>{
            //cy.wrap(iframeApp).clear().type('qq brodyagi')
            cy.wrap(iframeApp).type('{selectall}XAJLOY')
        })
    })
})