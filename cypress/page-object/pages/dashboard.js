/// <reference types="cypress" />


export class Dashboard{
    static sideBar(){
        cy.get('.sidebar-space').should('be.visible')
        cy.get('.logo > svg').should('be.visible')
        cy.get('ul > div').should('have.length', 9)
    }
    static pageContent(){
        cy.get('.sidebar-space').should('be.visible')
        cy.get('.col-12.col-lg-6.col-md-12.col-sm-12', {timeout:2000}).should('have.length', 2)
    }
} 
export class CreateContract {
    static createNewContract(){
        cy.get('ul > div:nth-of-type(2) > .anchor').click()
        cy.contains('.mb-8.semi-bold', 'Contract Type')
        cy.get('.row > div').should('have.length', 4)
    }
}

