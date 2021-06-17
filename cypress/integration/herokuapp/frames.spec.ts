/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { Frames } from '../../support/page-objects/frames';
const utils = new Utils();
const frames = new Frames();

describe(data.frames.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.frames.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.frames.tagLine);
    });

    context('Nested Frames', () => {
        it('should assert correctly frames text', () => {
            frames.goToExample('Nested')
            cy.get('frame[name="frame-top"]').its('0.contentDocument').should('exist').then((content) => {
                cy.wrap(content).its('body').should('not.be.undefined').then(cy.wrap).find('frame[name="frame-left"]').its('0.contentDocument').should('exist');
            })
        });
    });

    context('iframe', () => {
        it('should have correct content in iframe', () => {
            frames.goToExample('iFrame');
            cy.get('#mce_0_ifr').its('0.contentDocument').should('exist').then((content) => {
                cy.wrap(content).its('body').should('not.be.undefined').then(cy.wrap).find('p').should('have.text', 'Your content goes here.')
            })
        });
    });
});