export class Hover {
    hoverImage(imageNo:number) {
        return cy.get('#content .figure').eq(imageNo - 1).trigger('mouseover').then(($img) => {
            cy.wrap($img).find('img').click({force: true});
        });
    }

    getImageCaption(imageNo:number) {
        return cy.get('#content .figure .figcaption h5').eq(imageNo - 1);
    }

    captionIsVisible(imageNo:number) {
        this.getImageCaption(imageNo).should('be.visible');
    }

    captionIsNotVisible(imageNo:number) {
        this.getImageCaption(imageNo).should('not.be.visible');
    }
}