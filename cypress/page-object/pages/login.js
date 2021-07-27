/// <reference types="cypress" />

export default class LoginPage{
    static login(username, password){
        cy.login(username, password)
    }
    static  whatsNewContent(){
        cy.get('.whats-new-slides', {timeout:20000}).should('be.visible')
        cy.get('.button.button-close').click()
    }
} 

