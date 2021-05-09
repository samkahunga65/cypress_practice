Feature: job application

    testing how a user can apply for a job (product lead)
    # Scenario: user navigates to jobs page
    #     Given user is on the landing page
    #     When user clicks jobs link at the footer of the page
    #     Then user is taken to job openings page

    Scenario: user selects job to apply to
        Given user is on the job openings page
        When user selects job to apply
        Then users is taken to application page

    Scenario: user applies for job
        Given user is on the application page
        When user fills in "Fname"
        And user fills in "Lname"
        And user fills in "email"
        And user fills in "resume"
        And user fills in "Linkedin"
        And user fills in "portfolio"
        And user fills in other personal details
        Then user is shown a message saying lets tango