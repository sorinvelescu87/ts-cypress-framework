/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { DynamicControls } from '../../support/page-objects/dynamic-controls';
const utils = new Utils();
const dynamic = new DynamicControls();

describe(data.dynamic_controls.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.dynamic_controls.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.dynamic_controls.tagLine)
    });

    it('should remove checkbox', () => {
        dynamic.removeCheckbox();
    });

    it('should add checkbox', () => {
        dynamic.removeCheckbox();
        utils.clickOn(dynamic.getCheckboxButton());
        dynamic.getCheckboxMessage().should('have.text', 'It\'s back!');
        dynamic.getCheckboxButton().should('have.text', 'Remove');
    });

    it('should enable text input', () => {
        dynamic.enableInputText();
    });

    it('should disable input text', () => {
        dynamic.enableInputText();
        dynamic.disableInputText();
    });
});