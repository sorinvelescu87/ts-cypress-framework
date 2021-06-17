/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import {EntryAd} from '../../support/page-objects/entry-ad'
const utils = new Utils();
const entryAd = new EntryAd();

describe(data.entry_ad.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.entry_ad.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.entry_ad.tagLine);
    });

    it('should close modal', () => {
        entryAd.closeModal();
        entryAd.getCloseModalButton().should('not.be.visible');
    });

    it('should open modal via click', () => {
        entryAd.closeModal();
        entryAd.restartAd();
        entryAd.getCloseModalButton().should('be.visible')
    });
});