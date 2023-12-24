/// <reference types="Cypress"/>
describe('Second Test in Cypress', () => {

    beforeEach(() => {
    cy.visit('/');

 });

    it('Modal & Overlays > Dialog', () => {
        cy.get('[title="Modal & Overlays"]').click();
        cy.contains('.menu-title','Dialog').click();
        cy.get('.appearance-filled').contains('button', 'Open Dialog without esc close').click()
        cy.get('.ng-star-inserted > nb-card-body').should('be.visible');
        console.log('this is some additional data passed to dialog');
        cy.on('window:confirm',(confirm)=>{
          expect(confirm).to.equal('Close Dialog');
    });

        cy.contains('button', 'Close Dialog').click();

    });            


    it('Tables & Data > Check the number of teenagers', () => {
        cy.contains('Tables & Data').click();
        cy.contains('.menu-title','Smart Table').click();

        cy.get('input-filter').last().click().type(13)
         .then(() => {
        cy.get('tbody').contains('tr','Sevan').should('contain','13')
         .should('have.length', 1)
         .then(() => {
        cy.get('tbody').contains('tr','Bennet').should('contain','13')
         .should('have.length', 1);

        });      
        
        cy.get('[type="text"]').last().clear();
        cy.get('input-filter').last().click().type(14)
         .then(() => {
        cy.get('tbody').contains('tr','No data found');

        });

        cy.get('[type="text"]').last().clear();
        cy.get('input-filter').last().click().type(15)
         .then(() => {
        cy.get('tbody').contains('tr','Newman').should('contain','15')
         .should('have.length', 1)
         .then(() => {
        cy.get('tbody').contains('tr','Haynes').should('contain','15')
         .should('have.length', 1);
   
        });

        cy.get('[type="text"]').last().clear();
        cy.get('input-filter').last().click().type(16)
         .then(() => {
        cy.get('tbody').contains('tr','Lou').should('contain','16')
         .should('have.length', 1)
         .then(() => {
        cy.get('tbody').contains('tr','Trujillo').should('contain','16')
         .should('have.length', 1);

        });

        cy.get('[type="text"]').last().clear();
        cy.get('input-filter').last().click().type(17)
         .then(() => {
        cy.get('tbody').contains('tr','No data found');

         });

        cy.get('[type="text"]').last().clear();
        cy.get('input-filter').last().click().type(18)
        cy.wait(300)
         .then(() => {
        cy.get('tbody').contains('tr','Larry').should('contain','18')
         .should('have.length', 1);

        });
        
        cy.get('[type="text"]').last().clear(); 
        cy.get('input-filter').last().click().type(19)
         .then(() => {
        cy.get('tbody').contains('tr','Griffin').should('contain','19')
         .should('have.length', 1);
        cy.get('[type="text"]').last().clear();
       
     }); 

        cy.log('The number of teenagers in the Smart Table is eight')
    
    
    });
   });   
  });
 });
});
