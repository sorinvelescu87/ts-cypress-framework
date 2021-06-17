export class Dropdown {
    getDropDown() {
        return cy.get('#dropdown');
    }

    selectOption(value:any) {
        return this.getDropDown().select(value);
    }

    getSelectedValue() {
        return this.getDropDown().find('[selected="selected"]');
    }

    selectedOptionShouldHaveValue(value:any) {
        return this.getSelectedValue().should('have.value', value);
    }
}