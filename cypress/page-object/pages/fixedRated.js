/// <reference types="cypress" />


export class FixedRated{
    static fixedRatedOption(){
        cy.get('.row > div:nth-of-type(1) > .anchor').should('be.visible')
        cy.contains('div:nth-of-type(1) > .anchor  .mt-9', 'Fixed Rate')
        cy.contains('div:nth-of-type(1) > .anchor  .mt-4.p-gray', 'For contracts that have a fixed rate on every payment cycle')
        cy.get('.row > div:nth-of-type(1) > .anchor').click()
    }
    static generalInfo(contractName, jobTitle, option, scopeOfWork){
        var today = new Date()
        cy.get('.title-description-form').should('be.visible')
        cy.get(`input[name='name']`).type(contractName)
        cy.get(`input[name='jobTitle']`).type(jobTitle)
        cy.get('.suggestions-option').click()
        cy.get('.css-fke1ie-indicatorContainer.select__dropdown-indicator.select__indicator').click()
        cy.get(`#react-select-2-option-${option}`).click()
        cy.get(`textarea[name='scope']`).type(scopeOfWork)
        cy.get('.self-end [sizetype]').click()
        cy.get(`div.react-calendar__month-view__days > button:nth-child(${today.getDate()+2})`).click()
        cy.get('.button.mb-7.w-100').click()
    }

    static paymentDetails(rate, currency, per){
        cy.get('.text-left > .box').should('be.visible')
        cy.get(`input[name='rate']`).type(rate)
        cy.get('div:nth-of-type(2) > .input-container .css-1wy0on6.select__indicators').click()
        cy.get(`#react-select-3-option-${currency}`).click()
        cy.get('div:nth-of-type(3) > .col-lg-7.col-md-7.col-xl-7 > .input-container .css-1wy0on6.select__indicators').click()
        cy.get(`#react-select-4-option-${per}`).click()
        cy.get('.text-left > .button.mt-9.w-100').click()
    } 

    static defineDates(){
        cy.contains('.mb-7.subtitle.text-left', 'Define dates of contract')
        cy.get('.box > .text-left').should('be.visible')
        cy.get('form > .button.mt-9.w-100').click()
    }

    static extras(specialClause){
        cy.get('.extra-form.flex.flex-dir-col').should('be.visible').wait(3000)
        cy.get('div:nth-of-type(5) > .box.text-left .font-medium.mb-4.pt-4').should('contain', 'Special Clause')
        cy.get(':nth-child(5) > .box > .flex > :nth-child(2) > .button').click()
        cy.get('.pb-4.pl-7.pr-7.pt-4.resizable.textarea').type(specialClause)
        cy.get('.button.mt-7.w-100').click()
    }

    static compliance(country, state){
        cy.get('.compliance-form.flex.flex-dir-col').should('be.visible')
        cy.get(`[data-qa='contractor-tax-residence'] [class='select__indicators css-1wy0on6']`).click()
        cy.get(`#react-select-8-option-${country}`).click()
        cy.get('.input-container.mt-9 .css-1wy0on6.select__indicators').click()
        cy.get(`#react-select-9-option-${state}`).click()
        cy.get('.button.mt-7.w-100').click()
    }
    static summary(contractName){
        cy.get('h1', {timeout:100000}).should('contain', contractName);
    }
}