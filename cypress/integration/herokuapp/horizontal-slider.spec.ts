/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { HorizontalSlider } from '../../support/page-objects/horizontal-slider'
const utils = new Utils();
const slider = new HorizontalSlider();

describe(data.horizontal_slider.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.horizontal_slider.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.horizontal_slider.tagLine);
    });

    it('should update slider', () => {
        slider.updateInputValue(3);
        slider.assertValue(3);
    });
});