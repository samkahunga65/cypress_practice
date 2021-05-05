import { JobApplication } from "../pageObjects/jobApplication"
import { JobSelection } from "../pageObjects/jobSelection"
import { Landing } from "../pageObjects/landing"

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
    
})
When("user selects job to apply", ()=>{})
Then("users is taken to application page",()=>{})
Given("user is on the application page",()=>{})
When("user fills in personal details", ()=>{})
Then("user is shown a message saying lets tango", ()=>{})