import 'cypress-iframe'

class HomePage {

    requestNowLink() {
        return cy.get('span:contains("REQUEST NOW")');
    }

    twitterFrame(){
        return cy.get('#twitter-widget-0');
    }

}

export default HomePage;