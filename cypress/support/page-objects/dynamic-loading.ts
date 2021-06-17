export class DynamicLoading {
    goToExample(exampleNumber:number) {
        cy.get('#content a').eq(exampleNumber - 1).click();
    }

    getStartButton() {
        return cy.get('#start button');
    }

    getFinishElement() {
        return cy.get('#finish h4', {timeout: 10000});
    }
}