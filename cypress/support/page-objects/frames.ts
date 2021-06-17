export class Frames {
    goToExample(pageName:string) {
        cy.contains(pageName).click();
    }
}