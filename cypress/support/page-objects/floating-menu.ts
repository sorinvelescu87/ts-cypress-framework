export class FloatingMenu {
    pageFooter() {
        return cy.get('#page-footer');
    }

    getMenu() {
        return cy.get('#menu');
    }
}