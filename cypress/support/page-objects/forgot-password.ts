import { Utils } from "../utils";
const utils = new Utils();

export class ForgotPassword {
    getInput() {
        return cy.get('#forgot_password input')
    }

    getSubmitButton() {
        return cy.get('#forgot_password button')
    }

    emptySubmission() {
        utils.clickOn(this.getSubmitButton());
        cy.get('h1').should('have.text', 'Internal Server Error');
    }

    goodSubmission() {
        utils.type('email@email.com', this.getInput());
        utils.clickOn(this.getSubmitButton());
        cy.url().should('include', 'email_sent');
        cy.get('#content').invoke('text').should('include', "Your e-mail\'s been sent!");
    }
}