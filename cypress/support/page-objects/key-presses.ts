export class KeyPresses {
    getInput() {
        return cy.get('#target');
    }

    getResult() {
        return cy.get('#result');
    }
}