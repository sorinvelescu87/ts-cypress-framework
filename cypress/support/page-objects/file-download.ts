export class FileDownload {
    getFile(fileName:string) {
        return cy.contains(fileName);
    }

    downloadFile(fileName:string) {
        cy.request({
            url: '/download/' + fileName,
            encoding: 'binary'
          })
          .then((response) => {
            cy.writeFile('/Users/svelescu/Documents/WORK/ts-cypress-framework/cypress/downloads/' + fileName, response.body, 'binary')
          });
    }

    readTxtFile(fileName:string, expectedText:string) {
        cy.readFile('/Users/svelescu/Documents/WORK/ts-cypress-framework/cypress/downloads/' + fileName ).should('eq', expectedText);
    }

    checkHeaders(fileName:string) {
        cy.request({
            url: '/download/' + fileName,
            encoding: 'binary'
          })
          .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.headers, 'response headers').to.include({
                    'content-disposition': 'attachment; filename="' + fileName + '"'
                });        
            });
    }
}