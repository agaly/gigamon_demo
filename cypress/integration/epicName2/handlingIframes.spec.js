import 'cypress-iframe'
import HomePage from '../../pageObjects/HomePage'

describe("requestDemo", () => {

    const homePage = new HomePage();

    before(() => {
        cy.visit(Cypress.env('host'))
    });

    it("Navigate to gigamon's twitter account", () => {
        homePage.twitterFrame().then(iframe => {
            const body = iframe.contents().find('body');
            cy.wrap(body).find('div[class="TweetAuthor js-inViewportScribingTarget"] > a').then(element => {
                const twitterAccountUrl = element.prop('href');
                expect(twitterAccountUrl).to.contain('twitter.com/gigamon');

            })
        })
    });

})