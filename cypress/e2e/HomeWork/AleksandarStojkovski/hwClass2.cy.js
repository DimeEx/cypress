describe('My Cypress Test Suite', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Open web app', () => {
        // Your test code for opening the web app
    });

    it("Test 1 - Click on Layout and Stepper", () => {
        cy.contains(".menu-title", 'Layout').should('be.visible').click();
        cy.contains(".menu-title", 'Stepper').click();
        cy.url().should("eq", "http://localhost:4200/pages/layout/stepper")
            .then(() => {
                console.log('URL is as expected:', cy.url());
            });
    });
    it("Test 2 - Click on Layout and Accordion", () => {
        cy.contains(".menu-title", 'Layout').should('be.visible').click();
        cy.contains(".menu-title", 'Accordion').click();
        cy.url().should("eq", "http://localhost:4200/pages/layout/accordion")
            .then(() => {
                console.log('URL is as expected:', cy.url());
            });
    });

    it("Test 3 - Click on Forms", () => {
        cy.contains(".menu-title", 'Forms').should('be.visible').click();
        // Add assertions or further interactions if needed
    });

    it("Test 4 - Click on Form Layouts", () => {
        cy.contains(".menu-title", 'Form Layouts').should('be.visible').click();
        cy.url().should("eq", "http://localhost:4200/pages/forms/layouts")
    });

    // ... Repeat the pattern for other menu items

    it("Test 13 - Click on Tree Grid", () => {
        cy.contains(".menu-title", 'Tree Grid').should('be.visible').click();
        // Add assertions or further interactions if needed
    });
});
