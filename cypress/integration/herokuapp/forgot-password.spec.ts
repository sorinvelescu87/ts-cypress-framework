/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { ForgotPassword } from '../../support/page-objects/forgot-password';
const utils = new Utils();
const forgotPass = new ForgotPassword();

describe(data.forgot_password.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.forgot_password.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.forgot_password.tagLine)
    });

    it('should submit with empty input', () => {
        forgotPass.emptySubmission();
    });

    it('should submit with good input', () => {
        forgotPass.goodSubmission();
    });
});