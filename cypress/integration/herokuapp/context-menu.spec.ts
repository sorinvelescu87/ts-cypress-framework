/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { ContextMenu } from '../../support/page-objects/context-menu'
const utils = new Utils();
const cm = new ContextMenu();

describe(data.context_menu.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.context_menu.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.context_menu.tagLine)
    });

    it('rightclicks the hotspot', () => {
        utils.rightClickOn(cm.getHotSpot());
        utils.expectAlertToContain(data.context_menu.alertText);
    });
});