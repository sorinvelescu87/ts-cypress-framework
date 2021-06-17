/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { Hover } from '../../support/page-objects/hover'
const utils = new Utils();
const hover = new Hover();

describe(data.hovers.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.hovers.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.hovers.tagLine)
    });

    it('should display caption on hover', () => {
        hover.captionIsNotVisible(1);
        hover.hoverImage(1);
        hover.captionIsVisible(1);
    });
});