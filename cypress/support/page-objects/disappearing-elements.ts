export class DisappearingElements {
    getLastElement() {
        return cy.get('#content ul li').last();
    }

    assertLastElement() {
        cy.get('#content ul').find('li').then((li) => {
            const lis = Cypress.$(li).length;
            if (lis == 4) {
                return this.getLastElement().should('have.text', 'Portfolio')
             }
             else {
                 return this.getLastElement().should('have.text', 'Gallery')
             }        });
    }
}