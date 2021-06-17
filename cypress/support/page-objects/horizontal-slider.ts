export class HorizontalSlider {
    getInput() {
        return cy.get('#content input');
    }

    getInputValue() {
        return cy.get('#content span#range').invoke('text').then(parseFloat);
    }

    updateInputValue(updateValue:number) {
        this.getInput().invoke('val', updateValue).trigger('change');
    }

    assertValue(value:number) {
        this.getInputValue().should('equal', value);
    }
}