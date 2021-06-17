export class BrokenImages {

    nthImageIsBroken(nthImage) {
        cy.get("#content img").eq(nthImage).should('be.visible').and(($img) => {
            expect($img[0].naturalWidth).to.equal(0)
        })
    }

    nthImageIsIsNotBroken(nthImage) {
        cy.get("#content img").eq(nthImage).should('be.visible').and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    }
}