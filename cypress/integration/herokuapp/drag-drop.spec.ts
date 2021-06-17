/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { DragDrop } from '../../support/page-objects/drag-drop'
const utils = new Utils();
const drg = new DragDrop();

describe(data.drag_drop.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.drag_drop.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.drag_drop.tagLine);
    });

    it('drags and drops', () => {
        drg.getColumnAHeader().should('have.text', 'A');
        drg.getColumnBHeader().should('have.text', 'B');
        drg.drag();
        drg.getColumnAHeader().should('have.text', 'B');
        drg.getColumnBHeader().should('have.text', 'A');
    });
});