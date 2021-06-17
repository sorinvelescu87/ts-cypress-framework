/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import {InfiniteScroll} from '../../support/page-objects/infinite-scroll';
const utils = new Utils();
const infinite_scroll = new InfiniteScroll();

describe(data.infinite_scroll.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.infinite_scroll.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.infinite_scroll.tagLine)
    });

    it('should scroll to footer' , () => {
        infinite_scroll.assertNoChildrenToBeEqualTo(2);
        cy.scrollTo(0, 1000);
        infinite_scroll.assertNoChildrenToBeEqualTo(3);
        cy.wait(500); 
        cy.scrollTo(0, 2000);
        infinite_scroll.assertNoChildrenToBeEqualTo(4);
    });
});