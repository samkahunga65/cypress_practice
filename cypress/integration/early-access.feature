Feature: early access

    sign user up for early access for tango service

    Scenario: Sign up for early access
        Given user is on the landing page
        When user clicks get early access button
        Then user is taken to get early access page
    Scenario: Complete early access process
        Given user is on the get early access page
        When user fills in name, company name, work email, how you plan to use tango inputs
        And user clicks captcha
        And user clicks submit button
        Then page shows thank you message