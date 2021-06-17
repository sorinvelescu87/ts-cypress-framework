/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
const utils = new Utils();

describe(data.js_error.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.js_error.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.js_error.tagLine)
    });
});