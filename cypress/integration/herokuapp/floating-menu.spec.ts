/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { FloatingMenu } from '../../support/page-objects/floating-menu'
const utils = new Utils();
const floating = new FloatingMenu();

describe(data.floating_menu.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.floating_menu.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.floating_menu.tagLine)
    });

    it('should scroll page and menu should be in viewport', () => {
        floating.getMenu().should('be.visible.and.inViewport');
        floating.pageFooter().should('not.be.inViewport');
        cy.scrollTo('bottom');
        floating.getMenu().should('be.visible.and.inViewport');
        floating.pageFooter().should('be.visible.and.inViewport');
    });
});