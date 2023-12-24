export class PageNavigation{

    FormLayouts(){
        cy.visit('/')
        cy.contains('.menu-title', 'Forms').click();
        cy.get('li.menu-item').find('[title="Form Layouts"]').click();
    }
    FormTyping(){
        cy.get('[placeholder="Jane Doe"]').type(this.data.FullName);
        cy.get('.form-inline > [placeholder="Email"]').type(this.data.Email);
    }
    FormSubmiting(){
        cy.contains('Remember me').click();
        cy.get('.form-inline').find('[type="submit"]').click();
    }  
}
export const navigateToPage = new PageNavigation();