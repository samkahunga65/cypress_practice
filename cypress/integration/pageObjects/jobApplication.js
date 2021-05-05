export class JobApplication{
    checkIfJobApplication(){cy.get('#apply_button').should('be.visible')}
    fillFname(fname){
        cy.get('#first_name').type(fname)
    }
    fillLname(lname){
        cy.get('#last_name').type(lname)
    }
    fillEmail(email){
        cy.get('#email').type(email)
    }
    fillPhone(phone){
        cy.get('#phone').type(phone)
    }
    addResume(resume){
        cy.get('[data-source="paste"]').click()
        cy.get('#resume_text').type(resume)
    }
    addLinkedin(link){
        cy.get('#job_application_answers_attributes_0_text_value').type(link)
    }
    addPortfolio(portfolio){
        cy.get('#job_application_answers_attributes_1_text_value').type(portfolio)
    }
    selectJob(){
        cy.get('#s2id_job_application_answers_attributes_2_answer_selected_options_attributes_2_question_option_id > .select2-choice > .select2-arrow > b').click()
        cy.get('#selectedOption > .select2-result-label').click()
    }
    selectLocation(){
        cy.get('#s2id_job_application_answers_attributes_3_answer_selected_options_attributes_3_question_option_id > .select2-choice > .select2-arrow > b').click()
        cy.get(':nth-child(3) > .select2-result-label').click()
    }
    addStartDate(){
        cy.get('#job_application_answers_attributes_4_text_value').type('today')
    }
    submit(){
        cy.get('#job_application_answers_attributes_4_text_value').click()
        
    }
}