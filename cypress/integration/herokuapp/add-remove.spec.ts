/// <reference types="cypress" />
import { AddRemove } from '../../support/page-objects/add-remove';
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
const addRemove = new AddRemove();
const utils = new Utils();

describe(data.add_remove.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.add_remove.path);
    });

    it('should have the correct tag line', () => {
        utils.assertTagLine(data.add_remove.tagLine)    
    });

    it('should add an element', () => {
        utils.clickOn(addRemove.getAddElementButton());
        utils.assertLength(addRemove.getDeleteElements() ,1);
    });

    it('should add more elements', () => {
        addRemove.addElements(5);
        utils.assertLength(addRemove.getDeleteElements() ,5);
    });

    it('should remove the last button', () => {
        addRemove.addElements(5);
        addRemove.deleteNthElement(5);
        utils.assertLength(addRemove.getDeleteElements() ,4);
    });

    it('should delete all elements', () => {
        addRemove.addElements(5);
        addRemove.deleteAllElements();
        utils.elementShouldNotExist(addRemove.getDeleteElements());
    });
});