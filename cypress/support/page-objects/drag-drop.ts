export class DragDrop {
    getColumnA() {
        return cy.get("#column-a");
    }

    getColumnB() {
        return cy.get("#column-b");
    }

    getColumnAHeader() {
        return cy.get("#column-a").find('header');
    }

    getColumnBHeader() {
        return this.getColumnB().find('header');
    }

    drag() {
        const dataTransfer = new DataTransfer;
        this.getColumnA().trigger('dragstart', { dataTransfer });
        this.getColumnB().trigger('drop', { dataTransfer });
        this.getColumnA().trigger('dragend');
    }
}