/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { DynamicContent } from '../../support/page-objects/dynamic-content'
const utils = new Utils();
const dynamic = new DynamicContent();

describe(data.dynamic_content.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.dynamic_content.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.dynamic_content.tagLine)
    });

    it('should update text on refresh', () => {
        dynamic.assertParagraphNumberTextHasChanged(1);
        dynamic.assertParagraphNumberTextHasChanged(2);
        dynamic.assertParagraphNumberTextHasChanged(3);
    });

    it('should keep the static text', () => {
        utils.goToPage(data.dynamic_content.path + '?with_content=static');
        dynamic.assertParagraphNumberTextHasChanged(3);
        dynamic.assertParagraphNumberTextIsTheSame(1);
    });

    it('should check images have source and it is correct', () => {
        dynamic.assertImageSource();
    });
});