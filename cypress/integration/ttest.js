/// <reference types='cypress'/>

it('should navigate to todo app', ()=>{
    cy.visit('http://todomvc-app-for-testing.surge.sh')
    cy.get('.new-todo').type("aroo!{enter}")
})