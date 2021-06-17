/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { FormAuth } from '../../support/page-objects/form-auth'
const utils = new Utils();
const formAuth = new FormAuth();

describe(data.form_auth.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.form_auth.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.form_auth.tagLine)
    });

    it('should login unsuccessfully', () => {
        formAuth.login(data.form_auth.username, data.form_auth.badPassword);
        formAuth.assertUnsuccessfulLogin();
    });

    it('should login successfully', () => {
        formAuth.login(data.form_auth.username, data.form_auth.password);
        formAuth.assertSuccessfulLogin();
    });
});