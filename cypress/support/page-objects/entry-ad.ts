import { Utils } from "../utils"
const utils = new Utils();

export class EntryAd {
    getCloseModalButton() {
        return cy.get('#modal .modal .modal-footer p', {timeout: 10000});
    }

    closeModal() {
        this.getCloseModalButton().should('be.visible')
        return utils.clickOn(this.getCloseModalButton());
    }

    restartAdLink() {
        return cy.get('#restart-ad');
    }

    restartAd() {
        this.restartAdLink().should('be.visible');
        utils.clickOn(this.restartAdLink());
        cy.wait(2000);
    }
}