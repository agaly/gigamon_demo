import HomePage from '../../pageObjects/HomePage'
import RequestDemoPage from '../../pageObjects/RequestDemoPage'

describe("requestDemo", () => {

    const requestDemoPage = new RequestDemoPage();
    const homePage = new HomePage();
    let titles;
    let requestDemoTestData;

    before(() => {
        cy.fixture('pageTitles').then(data => {
            titles = data;
        })
        cy.fixture('requestDemoTestData').then(data => {
            requestDemoTestData = data;
        })
        cy.visit(Cypress.env('host'))
    });

    it("Navigate to request demo page", () => {
        homePage.requestNowLink().click();
        cy.title().should('eq', titles.personalizedDemoPage);
    });

    it("Submit request for the personalized demo", () => {
        requestDemoPage.firstNameField().type(requestDemoTestData.firstName);
        requestDemoPage.lastName().type(requestDemoTestData.lastName);
        requestDemoPage.email().type(requestDemoTestData.email);
        requestDemoPage.country().select(requestDemoTestData.country);
        requestDemoPage.submitButton().click();
        requestDemoPage.errorMessage().then(element=>{
            expect(element.text()).to.equal('This field is required.');
        })
    })

})