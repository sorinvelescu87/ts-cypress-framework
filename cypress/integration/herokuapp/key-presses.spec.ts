/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { KeyPresses } from '../../support/page-objects/key-presses';
const utils = new Utils();
const keyPresses = new KeyPresses();

describe(data.key_presses.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.key_presses.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.key_presses.tagLine)
    });

    it('should assert the last key pressed', () => {
        utils.type('A', keyPresses.getInput());
        keyPresses.getResult().should('have.text', 'You entered: A');

        utils.type('{rightarrow}', keyPresses.getInput());
        keyPresses.getResult().should('have.text', 'You entered: RIGHT');

        utils.type('{shift}', keyPresses.getInput());
        keyPresses.getResult().should('have.text', 'You entered: SHIFT');

        utils.type('7', keyPresses.getInput());
        keyPresses.getResult().should('have.text', 'You entered: 7');

        utils.type('abcgs', keyPresses.getInput());
        keyPresses.getResult().should('have.text', 'You entered: S');
    });
});