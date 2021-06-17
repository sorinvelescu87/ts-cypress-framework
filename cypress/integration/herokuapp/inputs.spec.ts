/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { Inputs } from '../../support/page-objects/inputs';
const utils = new Utils();
const inputs = new Inputs();

describe(data.inputs.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.inputs.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.inputs.tagLine)
    });

    it('should only accept numbers', () => {
        utils.type('asdasdas1223f', inputs.getInput());
        inputs.getInput().should('have.value', '1223');
        inputs.getInput().clear();

        utils.type('123', inputs.getInput());
        inputs.getInput().should('have.value', '123');
        inputs.getInput().clear();

        utils.type('abcdefghijk', inputs.getInput());
        inputs.getInput().should('have.value', '');
    });
});