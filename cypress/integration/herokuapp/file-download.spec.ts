/// <reference types="cypress" />
import  { Utils } from '../../support/utils';
import * as data from '../../fixtures/test-data.json';
import { FileDownload } from '../../support/page-objects/file-download'
const utils = new Utils();
const fileDownload = new FileDownload();

describe(data.file_download.tagLine, () => {
    beforeEach(() => {
        utils.goToPage(data.file_download.path);
    });

    it('should have the correct tagline', () => {
        utils.assertTagLine(data.file_download.tagLine)
    });

    it('should download textFile.txt file', () => {
        fileDownload.downloadFile('textFile.txt');
        fileDownload.readTxtFile('textFile.txt', data.file_download.fileTxt);
    });

    it('should verify response headers', () => {
        fileDownload.checkHeaders('sample.png');
        fileDownload.checkHeaders('textFile.txt');
        fileDownload.checkHeaders('some-file.txt');
    });
});