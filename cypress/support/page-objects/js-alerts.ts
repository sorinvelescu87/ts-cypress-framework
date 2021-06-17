export class JSAlerts {
    getAlertButton() {
        return cy.get('ul li').first().find('button');
    }

    getConfirmButton() {
        return cy.get('ul li').eq(1).find('button');
    }

    getPromptButton() {
        return cy.get('ul li').last().find('button');
    }

    getResult() {
        return cy.get('#result');
    }
}