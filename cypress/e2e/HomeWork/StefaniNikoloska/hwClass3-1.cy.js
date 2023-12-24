/// <reference types="Cypress"/>



describe('Second Test in Cypress', () => {

    beforeEach(() => {
    cy.visit('/');

 });

    it('Modal & Overlays > Dialog', () => {
        cy.get('[title="Modal & Overlays"]').click();
        cy.contains('.menu-title','Dialog').click();
        cy.get('.appearance-filled').contains('button', 'Open Dialog without esc close').click();
        cy.get('.ng-star-inserted > nb-card-body').should('be.visible'); 
        cy.get('.ng-star-inserted > nb-card-body').invoke('text')
        .then((text1) => {
            const text = text1
            expect(text1).to.eq(text); 
        
        console.log('this is some additional data passed to dialog');
        cy.contains('button', 'Close Dialog').click();

        
   });
  });
 

  it('Tables & Data > Check the number of teenagers', () => {
    cy.contains('Tables & Data').click();
    cy.contains('.menu-title','Smart Table').click();
    cy.get("tbody tr").should('have.length', '10');

    cy.get("tbody tr").each(($row) =>{
        cy.wrap($row).within(() => {
            cy.get('td').last().each(($col) => {
                cy.log($col.text())
    });
   });
  });
 });
});
