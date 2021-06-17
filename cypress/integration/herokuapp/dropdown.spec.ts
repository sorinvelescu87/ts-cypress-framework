/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { Dropdown } from '../../support/page-objects/dropdown'
const utils = new Utils();
const dropdown = new Dropdown();

describe(data.dropdown.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.dropdown.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.dropdown.tagLine)
    });

    it('should select option 2', () => {
        dropdown.getSelectedValue().should('have.text', 'Please select an option');
        dropdown.selectOption("2");
        dropdown.selectedOptionShouldHaveValue(2);
    });
});