describe('Nested If-Else Tests with Cypress', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('should perform different actions based on conditions for each item', () => {
        cy.contains("Tables & Data").click();
        cy.contains("Smart Table").click();
        let n = 0;
        cy.get('tbody>tr').get('div[ng-reflect-ng-switch="number"]').each(($Value) => {
            let age = $Value.text();
            if ((age) >= 13 && (age) <= 19) {   
                n++;
                cy.log("Number of teenagers is: " + n) 
            } 
          
        })
      
    })
})