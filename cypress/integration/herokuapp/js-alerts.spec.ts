/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { JSAlerts } from '../../support/page-objects/js-alerts';
const utils = new Utils();
const alerts = new JSAlerts();

describe(data.js_alerts.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.js_alerts.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.js_alerts.tagLine)
    });

    it('should assert correct alert', () => {
        alerts.getAlertButton().click();
        alerts.getResult().should('have.text', 'You successfully clicked an alert');
    });

    it('should assert correct confirm', () => {
        alerts.getConfirmButton().click();
        alerts.getResult().should('have.text', 'You clicked: Ok');
    });

    it('should assert correct prompt', () => {
        alerts.getPromptButton().click();
        alerts.getResult().should('have.text', 'You entered: null');
    });
});