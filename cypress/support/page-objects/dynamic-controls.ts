import  { Utils } from '../../support/utils';
const utils = new Utils();
export class DynamicControls {
    getCheckbox() {
        return cy.get('#checkbox')
    }

    getCheckboxButton() {
        return cy.get('#checkbox-example button');
    }

    getCheckboxMessage() {
        return cy.get('#checkbox-example #message', { timeout: 10000 });
    }

    getTextInput() {
        return cy.get('#input-example input');
    }

    getTextInputButton() {
        return cy.get('#input-example button');
    }

    getTextInputMessage() {
        return cy.get('#input-example #message', {timeout: 10000});
    }

    removeCheckbox() {
        this.getCheckboxButton().should('have.text', 'Remove');
        utils.clickOn(this.getCheckboxButton());
        this.getCheckboxMessage().should('have.text', 'It\'s gone!');
        this.getCheckboxButton().should('have.text', 'Add');
    }

    enableInputText() {
        this.getTextInput().should('be.disabled');
        utils.clickOn(this.getTextInputButton());
        this.getTextInputMessage().should('have.text', 'It\'s enabled!');
        this.getTextInputButton().should('have.text', 'Disable');
    }

    disableInputText() {
        this.getTextInput().should('be.enabled');
        utils.clickOn(this.getTextInputButton());
        this.getTextInputMessage().should('have.text', 'It\'s disabled!');
        this.getTextInputButton().should('have.text', 'Enable');
    }
}