/// <reference types="cypress" />
import  { BrokenImages } from '../../support/page-objects/broken-images';
import * as data from '../../fixtures/test-data.json'
import { Utils } from '../../support/utils';
const images = new BrokenImages();
const utils = new Utils();

describe(data.broken_images.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.broken_images.path);
    });

    it('should have the correct tag line', () => {
        utils.assertTagLine(data.broken_images.tagLine)    
    });

    it('should check the first two images are broken and the third is NOT', () => {
        images.nthImageIsBroken(0);
        images.nthImageIsBroken(1);
        images.nthImageIsIsNotBroken(2);
    });
});