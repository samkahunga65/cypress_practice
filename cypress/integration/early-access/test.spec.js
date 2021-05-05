const { Earlyaccess } = require("../pageObjects/earlyAccess")
const { Landing } = require("../pageObjects/landing")

const landing = new Landing()
const earlyaccess = new Earlyaccess()
Given("user is on the landing page", ()=>{
    cy.visit('https://www.tango.us/')
    
    landing.checkIfLanding()
})
When("user clicks get early access button", ()=>{
    cy.percySnapshot()
    landing.gotoSubmit("p@p.com")
})
Then("user is taken to get early access page", ()=>{
    cy.percySnapshot()
    earlyaccess.checkIfEarlyAccess()
})
Given("user is on the get early access page", ()=>{
    earlyaccess.checkIfEarlyAccess()
})
When("user fills in name, company name, work email, how you plan to use tango inputs", ()=>{
    earlyaccess.fillCompany("gooleg")
    earlyaccess.fillEmail('p@p.com')
    earlyaccess.fillHowYouPlanToUseTango("pp")
    earlyaccess.fillName("pp")
})
When("user clicks captcha", ()=>{
    earlyaccess.clickCaptcha()
})
When("user clicks submit button", ()=>{
    earlyaccess.submit()
})
Then("page shows thank you message", ()=>{
    cy.percySnapshot()
})