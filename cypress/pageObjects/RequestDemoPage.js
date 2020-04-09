class RequestDemoPage {

    submitButton(){
        return cy.get('button:contains("Submit")');
    }

    firstNameField(){
        return cy.get('#FirstName');
    }

    country(){
        return cy.get('#Country');
    }

    lastName() {
        return cy.get('input[id="LastName"]');
    }

    email() {
        return cy.get('#Email');
    }

    errorMessage(){
        return cy.get('.mktoErrorMsg');
    }

}

export default RequestDemoPage;

