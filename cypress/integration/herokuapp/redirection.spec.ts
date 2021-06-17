/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
const utils = new Utils();

describe(data.redirect_link.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.redirect_link.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.redirect_link.tagLine)
    });

    it('should succefully redirect user to status codes page', () => {
        cy.get('a[href="redirect"]').click();
        cy.url().should('eq', 'http://the-internet.herokuapp.com/status_codes');
    });
});