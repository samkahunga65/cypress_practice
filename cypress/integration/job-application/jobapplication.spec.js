import { JobApplication } from "../pageObjects/jobApplication"
import { JobSelection } from "../pageObjects/jobSelection"
import { Landing } from "../pageObjects/landing"
import credentials from "../../data/credentials"
const landing = new Landing()
const jobApplication = new JobApplication()
const jobSelection = new JobSelection()
Given("user is on the landing page",()=>{
    cy.visit('https://www.tango.us/')
    landing.checkIfLanding()
})
When("user clicks jobs link at the footer of the page", ()=>{
    landing.clickJobs()
})
Then("user is taken to job openings page", ()=>{
    jobSelection.checkIfJobselection()
})
Given("user is on the job openings page", ()=>{
    cy.visit("https://boards.greenhouse.io/tango")
    cy.percySnapshot()
    jobSelection.checkIfJobselection()
})
When("user selects job to apply", ()=>{
    jobSelection.selectProductLeadDesign()
})
Then("users is taken to application page",()=>{
    
    jobApplication.checkIfJobApplication()
})
Given("user is on the application page",()=>{
    jobApplication.checkIfJobApplication()
    cy.percySnapshot()
})
When(/^user fills in "(.*)"$/, dt=>{
    console.log({dt})
    switch(dt){
        case "Fname":{
            jobApplication.fillFname(credentials[dt])
            break
        }
        case "Lname":{
            jobApplication.fillLname(credentials[dt])
            break
        }
        case "email":{
            jobApplication.fillEmail(credentials[dt])
            break
        }
        case "resume":{
            jobApplication.addResume(credentials[dt])
            break
        }
        case "Linkedin":{
            jobApplication.addLinkedin(credentials[dt])
            break
        }
        case "portfolio":{
            jobApplication.addPortfolio(credentials[dt])
            break
        }
        default:
            return false
    }
})
When("user fills in other personal details", ()=>{
    jobApplication.selectJob()
    jobApplication.selectLocation()
    jobApplication.addStartDate()
    jobApplication.submit()
})
Then("user is shown a message saying lets tango", ()=>{
    return true
})