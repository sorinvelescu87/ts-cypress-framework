/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { DynamicLoading } from '../../support/page-objects/dynamic-loading';
const utils = new Utils();
const dynamic = new DynamicLoading();

describe(data.dynamic_loading.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.dynamic_loading.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.dynamic_loading.tagLine)
    });

    context('Example 1', () => {
        it('should click start to see the message', () => {
            dynamic.goToExample(1);
            dynamic.getStartButton().should('be.visible');
            dynamic.getFinishElement().should('be.hidden');
            utils.clickOn(dynamic.getStartButton());
            dynamic.getFinishElement().should('be.visible').and('have.text', 'Hello World!');
        });
    });

    context('Example 2', () => {
        it('should click start to see the message', () => {
            dynamic.goToExample(2);
            dynamic.getStartButton().should('be.visible');
            dynamic.getFinishElement().should('not.exist');
            utils.clickOn(dynamic.getStartButton());
            dynamic.getFinishElement().should('be.visible').and('have.text', 'Hello World!');
        });
    });
});