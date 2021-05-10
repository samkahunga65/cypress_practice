describe("API testing", ()=>{
    Cypress.config("baseUrl", 'https://fierce-fortress-66021.herokuapp.com')
    it("Should test GET method",()=>{
        const name = "Jimmy"
        //try to get a user
        cy.request("GET", "/user/"+name)
        .its('body').should('eq', "no such user")
    })
    it("should test POST method",()=>{
        const user = {name:"jimmy", gender:"kyojin"}
        //create a user
        cy.request("POST", 'add_user', user)
        //check if user exists
        cy.request("GET", "/user/"+user.name)
        .its("body").should("eq", user.gender)
    })
    it("should test PATCH method", ()=>{
        const user = {name:"jimmy", gender:"kyojin", dish:"titans"}
        //create a user
        cy.request("POST", 'add_user', user)
        //modify user
        cy.request("PATCH", 'user_favorite_dish', user)
        //check if user exists
        cy.request("GET", "/user/"+user.name)
        .its("body").should(body=> assert(body.dish == user.dish, "users do nor match"))
    })
    it("should test DELETE method", ()=>{
        const user = {name:"jimmy", gender:"kyojin", dish:"titans"}
        //create a user
        cy.request("POST", 'add_user', user)
        //delete user
        cy.request("DELETE", 'delete_user', user)
        //check if user exists
        cy.request("GET", "/user/"+user.name)
        .its("body").should("eq", 'no such user')
    })
})