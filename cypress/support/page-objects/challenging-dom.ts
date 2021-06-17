export class ChallengingDOM {
    getLeftButtons() {
        return cy.get('#content a.button');
    }

    getTableRows() {
        return cy.get('tbody tr');
    }

    deleteButton() {
        return 'a[href="#delete"]';
    }

    editButton() {
        return 'a[href="#edit"]';
    }

    assertRowsContainSelector(selector:any) {
        this.getTableRows().each(($row) => {
            cy.wrap($row).find(selector).should('be.visible');
        });
    }
}