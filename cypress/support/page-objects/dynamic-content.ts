export class DynamicContent {
    getParagraphNo(rowNumber:number) {
        return cy.get('#content .row').eq(rowNumber).find('div').eq(1);
    }

    assertParagraphNumberTextHasChanged(rowNumber:number) {
        this.getParagraphNo(rowNumber).invoke('text').then((text1) => {
            cy.reload();
            this.getParagraphNo(rowNumber).invoke('text').should((text2) => {
                expect(text1).not.to.eq(text2);
            });
        });
    }

    assertParagraphNumberTextIsTheSame(rowNumber:number) {
        this.getParagraphNo(rowNumber).invoke('text').then((text1) => {
            cy.reload();
            this.getParagraphNo(rowNumber).invoke('text').should((text2) => {
                expect(text1).to.eq(text2);
            });
        });
    }

    assertImageSource() {
        cy.get('#content .row img').should('be.visible').then(($image) => {
            cy.wrap($image).should('have.attr', 'src');
                const imgLength = Cypress.$($image).length;
                for (let i=0; i < imgLength; i++) {
                    let $imgSrc = Cypress.$('#content .row img').eq(i).attr('src');
                    cy.wrap($imgSrc).should('contain', 'Original-Facebook-Geek-Profile-Avatar');
                }
        });
    }
}