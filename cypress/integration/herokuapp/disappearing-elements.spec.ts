/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { DisappearingElements } from '../../support/page-objects/disappearing-elements'
const utils = new Utils();
const disElem = new DisappearingElements();

describe(data.disappearing_elements.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.disappearing_elements.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.disappearing_elements.tagLine)
    });

    it('should correctly assert the last item', () => {
        disElem.assertLastElement();
    });
});