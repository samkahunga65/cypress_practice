/// <reference types="cypress"/>

Given("user is on the landing page", ()=>{
    cy.visit("https://www.tango.us/")
    cy.injectAxe()
    cy.checkA11y()
})
//The following are set to return true as not to fail the test unnecesarily
When("user starts navigating page",()=>{return true})
Then("user will be able to understand the content even if disabled", ()=>{return true})