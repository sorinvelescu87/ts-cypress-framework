import { Utils } from "../utils";
const utils = new Utils();

export class FileUpload {
    getChooseFile() {
        return cy.get('form #file-upload');
    }

    getUploadButton() {
        return cy.get('form #file-submit');
    }

    getReturnMessage() {
        return cy.get('#content h3');
    }

    uploadFile(filePath: string) {
        this.getChooseFile().attachFile(filePath);
        utils.clickOn(this.getUploadButton());
        this.getReturnMessage().should('have.text', 'File Uploaded!')
    }
}