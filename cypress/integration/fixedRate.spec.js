import { login_password, login_username, url } from "../../config"
import LoginPage from "../page-object/pages/login";
import {Dashboard, CreateContract} from "../page-object/pages/dashboard";
import { FixedRated } from "../page-object/pages/fixedRated"
import {fixedRateContract} from "../page-object/pages/contractData.json"

const contractName = fixedRateContract.contractName
const jobTitle = fixedRateContract.jobTitle
const senioty = fixedRateContract.seniorityLevel
const scope = fixedRateContract.scopeOfWork
const rate = fixedRateContract.howMuch
const currency = fixedRateContract.currency["GBP - British Pound"]
const per = fixedRateContract.Per.Week
const specialClause = fixedRateContract.specialClause
const country = fixedRateContract.contractorTaxResidence.country["United States"]
const state = fixedRateContract.contractorTaxResidence.state.Colorado


describe('Create a Fixed Rate Contract', () => {
    before(function() {
    cy.visit(url)
    })

    it('Should log into the Deel Dashboard', () => {
        LoginPage.login(login_username, login_password)
        LoginPage.whatsNewContent()
    });
    it('Should Create New Contract on Dasboard', () => {
        Dashboard.sideBar()
        Dashboard.pageContent()
        CreateContract.createNewContract()
    });
    it('Should Open and Create a Fixed rate Contract', () => {
        FixedRated.fixedRatedOption()
        FixedRated.generalInfo(contractName, jobTitle, senioty, scope)
        FixedRated.paymentDetails(rate, currency, per)
        FixedRated.defineDates()
        FixedRated.extras(specialClause)
        FixedRated.compliance(country, state)
        FixedRated.summary(contractName)
    });
});