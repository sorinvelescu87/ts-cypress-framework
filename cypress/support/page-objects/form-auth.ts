import { Utils } from "../utils";
const utils = new Utils();

export class FormAuth {
    getUserNameInput() {
        return cy.get('#login #username');
    }

    getPasswordInput() {
        return cy.get('#login #password');
    }

    getLoginButton() {
        return cy.get('#login button');
    }

    getFlashMessage() {
        return cy.get('#flash-messages #flash');
    }

    getLogoutButton() {
        return cy.get('#login button.secondary');
    }

    login(username:string, password:string) {
        utils.type(username, this.getUserNameInput());
        utils.type(password, this.getPasswordInput());
        utils.clickOn(this.getLoginButton());
    }

    assertSuccessfulLogin() {
        cy.url().should('contain', 'secure');
        this.getFlashMessage().should('contain', 'You logged into a secure area!').and('have.class', 'success');
    }

    assertUnsuccessfulLogin() {
        cy.url().should('contain', 'login');
        this.getFlashMessage().should('contain', 'is invalid').and('have.class', 'error');
    }
}