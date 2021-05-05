/// <reference types='cypress'/>

export class Landing{
    gotoSubmit(email){
        cy.get('.nav-menu > .button').click()
    }
    clickSubmit(){
        cy.get('#email-form > .button').click()
    }
    checkIfLanding(){
        cy.get('.mobile-header').should("be.visible")
    }
    clickJobs(){cy.get(':nth-child(1) > :nth-child(3) > .footer-link').click()}
}