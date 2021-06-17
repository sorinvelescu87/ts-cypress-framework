export class InfiniteScroll {
    getJScrollMainElement() {
        return cy.get('.jscroll-inner');
    }

    getJScrollChildren() {
        return this.getJScrollMainElement().children('.jscroll-added');
    }

    assertNoChildrenToBeEqualTo(value:number) {
        this.getJScrollChildren().should('have.length', value);
    }
}