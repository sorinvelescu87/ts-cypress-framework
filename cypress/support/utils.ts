export class Utils {
    assertLength(selector:any, length:number) {
        selector.should("have.length", length);
    }

    clickOn(selector:any) {
        selector.click();
    }

    rightClickOn(selector:any) {
        selector.rightclick();
    }

    elementShouldNotExist(selector:any) {
        selector.should('not.exist');
    }

    goToPage(url:string) {
        cy.visit(url);
    }

    assertTagLine(tagLine:string) {
        cy.location().then((loc) => {
            if (loc.href.indexOf('dynamic_controls') > -1) {
                cy.get("h4").eq(0).should("have.text", tagLine);
            } 
            else if (loc.href.indexOf('forgot_password') > -1 || loc.href.indexOf('login') > -1) {
                cy.get("h2").eq(0).should("have.text", tagLine);
            } 
            else {
                cy.get("h3").eq(0).should("have.text", tagLine);
            }
        });
    }

    assertElementIsDisplayed(selector:any) {
        cy.get(selector).should('be.visible');
    }

    expectAlertToContain(alertText:string) {
        cy.on('window:alert', (str) => {
            expect(str).to.contain(alertText);
        });
    }

    type(key:string, selector:any) {
        selector.type(key);
    }
}