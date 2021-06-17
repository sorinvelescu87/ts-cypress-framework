/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { Checkboxes } from '../../support/page-objects/checkboxes'
const utils = new Utils();
const checkbox = new Checkboxes();

describe(data.checkboxes.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.checkboxes.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.checkboxes.tagLine)
    });

    it('asserts checkbox1 is unchecked and checkbox 2 is checked', () => {
        checkbox.assertNthCheckboxIsUnchecked(0);
        checkbox.assertNthCheckboxIsChecked(1);
    });

    it('checks checkbox 1 and unchecks checkox 2', () => {
        checkbox.checkNthCheckbox(0);
        checkbox.uncheckNthCheckbox(1);
        checkbox.assertNthCheckboxIsChecked(0);
        checkbox.assertNthCheckboxIsUnchecked(1);
    })
});