export class Checkboxes {
    assertNthCheckboxIsChecked(nthCheckbox:number) {
        cy.get("#checkboxes input").eq(nthCheckbox).should('be.checked'); 
    }

    assertNthCheckboxIsUnchecked(nthCheckbox:number) {
        cy.get("#checkboxes input").eq(nthCheckbox).should('not.be.checked'); 
    }

    checkNthCheckbox(nthCheckbox:number) {
        cy.get("#checkboxes input").eq(nthCheckbox).check();
    }
    uncheckNthCheckbox(nthCheckbox:number) {
        cy.get("#checkboxes input").eq(nthCheckbox).uncheck();
    }
}