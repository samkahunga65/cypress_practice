export class Earlyaccess{
    fillName(name){
        cy.get('#NAME').type(name)
    }
    fillCompany(company){
        cy.get('#COMPANY').type(company)
    }
    fillEmail(email){
        cy.get('#EMAIL').type(email)
    }
    checkIfEarlyAccess(){cy.get('.heading-15').should('be.visible')}
    fillHowYouPlanToUseTango(data){
        cy.get('#MESSAGE-2').type(data)
    }
    clickCaptcha(){cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()}
    submit(){cy.get('.default-button').click()}
}