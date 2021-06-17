/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { ChallengingDOM } from '../../support/page-objects/challenging-dom';
const utils = new Utils();
const cDOM = new ChallengingDOM();

describe(data.challenging_dom.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.challenging_dom.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.challenging_dom.tagLine)
    })

    it('should have 3 buttons in the left sidebar', () => {
        utils.assertLength(cDOM.getLeftButtons() ,3);
    });

    it('should assert that each row has an edit button', () => {
        cDOM.assertRowsContainSelector(cDOM.editButton());
    });

    it('should assert that each row has a Delete button', () => {
        cDOM.assertRowsContainSelector(cDOM.deleteButton());
    });

    it('should display canvas', () => {
        utils.assertElementIsDisplayed('#canvas');
    });
});