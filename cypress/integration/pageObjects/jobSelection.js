export class JobSelection{
    checkIfJobselection(){
        cy.get('#logo > img').should('be.visible')
    }
    selectProductLeadDesign(){
        cy.get(':nth-child(8) > :nth-child(2) > a').click()
    }
}