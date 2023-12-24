describe('My Cypress Test Suite', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.wait(2000);
    });

    it('OPEN THE WEB APPLICATION', () => {
        // Add test code here
    });

    it('Test 1 click on "Layout" menu and navigate to Layouts stepper', () => {
        cy.contains(".menu-title", "Layout").click();
        cy.get(".ng-tns-c7-2 .menu-title").click();
        cy.url().should("eq", "http://localhost:4200/pages/layout/stepper");
        cy.get('.form-control').type("Aleksandar");
        cy.get('.step-container > .appearance-filled').click();
    });

    it('Test 2 should click on "Forms" menu and navigate to form layouts', () => {
        cy.contains(".menu-title", "Forms").click();
        cy.contains(".menu-title", "Form Layout").click();
        cy.url().should("eq", "http://localhost:4200/pages/forms/layouts");

        cy.get('.form-inline')
            .find('[placeholder="Email"]')
            .click()
            .type("aleksandar@iwconnect");
        cy.get('.form-inline')
            .find('[placeholder="Jane Doe"]')
            .type("Aleksandar Stojkovski");
    });

    it('Test 3 should click on "Layout" menu and navigate to Layout Accordion', () => {
        cy.contains(".menu-title", "Layout").click();
        cy.get(".ng-tns-c7-3 .menu-title").click();
        cy.url().should("eq", "http://localhost:4200/pages/layout/accordion");
        cy.contains(".menu-title", "Accordion").click();
        cy.get('.appearance-filled').click();
    });

    it('Test 4 should click on "Forms" menu and navigate to form layouts, Then Selects RadioButton-1 or Option 1', () => {
        cy.contains(".menu-title", "Forms").click();
        cy.contains(".menu-title", "Form Layout").click();
        cy.url().should("eq", "http://localhost:4200/pages/forms/layouts");
        cy.get('nb-radio-group > :nth-child(1) > label > .text').click();
    });

    it('Test 5 should click on "Forms" menu and navigate to form layout and Selects RadioButton-2 Option 2', () => {
        cy.contains(".menu-title", "Forms").click();
        cy.contains(".menu-title", "Form Layout").click();
        cy.url().should("eq", "http://localhost:4200/pages/forms/layouts");
        cy.contains('nb-radio-group label', 'Option 2').click();
        cy.wait(2000);
    });

    it('Test 6 Checks a menu item in Tables & Data', () => {
        cy.get('[title="Tables & Data"]').click();
        cy.url().should('eq', 'http://localhost:4200/pages');

        cy.contains('.menu-title', 'Smart Table').click();
        cy.get('.ng-star-inserted').find('nb-card').should('contain.text', 'Smart Table');
        cy.url().should('eq', 'http://localhost:4200/pages/tables/smart-table');


        cy.contains('.menu-title', 'Tree Grid').click();
        cy.get('.fixed').eq(2).find('ngx-footer').should('contain.text', 'Created with • by');
        cy.url().should('eq', 'http://localhost:4200/pages/tables/tree-grid');
        console.log('The Tables & Data menu item and the subcategory items are clickable');
    });

    it('should click on "Auth" menu and navigate to Auth page', () => {
        cy.get('[title="Auth"]').click();
        cy.url().should('eq', 'http://localhost:4200/pages');
        cy.contains('.menu-title', 'Login').click();
        cy.get('.ng-star-inserted').find('hl').should('contain.text', 'Login');
        cy.get('.sub-title').should('contain.text', 'Hello! Log in with your email.');
        cy.url().should('eq', 'http://localhost:4200/auth/login');
   
    });

    it('Compare text fields "Product Details" and "Reviews" menus', () => {
        cy.visit("http://localhost:4200/pages/layout/accordion");

        cy.contains(".menu-title", "Accordion").click();
        cy.get('.appearance-filled').click();

        cy.get('.accordion-group', { timeout: 10000 }).should('contain.text', 'Product Details');
        cy.get('.accordion-group', { timeout: 10000 }).should('contain.text', 'Reviews');

        cy.get('.accordion-group')
            .contains("Product Details")
            .invoke("text")
            .as("productDetailsButtonText");

        cy.get('.accordion-group .accordion-toggle')
            .contains("Reviews")
            .invoke("text")
            .as("reviewsButtonText");

        cy.get("@productDetailsButtonText").then((productDetailsText) => {
            cy.get("@reviewsButtonText").should("not.equal", productDetailsText);
        });
    });

    it('Task 1: Count Teenagers in Smart Table', () => {
        // Navigate to Smart Table
        cy.get('[title="Tables & Data"]').click();
        cy.url().should('eq', 'http://localhost:4200/pages');
    
        cy.contains('.menu-title', 'Smart Table').click();
        cy.url().should('eq', 'http://localhost:4200/pages/tables/smart-table');
        cy.wait(1000);
    
        // Iterate through all pages in Smart Table
        cy.get('.pagination-controls')
            .find('.page-link')
            .each(($pageLink) => {
                cy.wrap($pageLink).click({ force: true });
    
                // Count teenagers on each page
                cy.get('.age-column').each(($ageColumn) => {
                    const age = parseInt($ageColumn.text());
                    if (age >= 13 && age <= 19) {
                        // Increment a counter or perform further actions as needed
                        // You may want to print or log these users
                        // Example: cy.log(`Found teenager with age: ${age}`);
                    }
                });
            });
    });
    it('Task 2: Open Dialog without ESC close', () => {
        // Navigate to Dialog in Modal & Overlays
        cy.contains('.menu-title', 'Modal & Overlays').click();
        cy.contains('.menu-title', 'Dialog').click();
        cy.url().should('eq', 'http://localhost:4200/pages/modal-overlays/dialog');
        cy.wait(1000);
    
        // Click on 'Open Dialog without ESC close'
        cy.contains('.btn', 'Open Dialog without ESC close').click();
       
        // Get text inside the red rectangle and assert its visibility
        cy.get('.dialog-with-config .rectangular-box').invoke('text').should('be.visible');
    
        // Print the text inside console
        cy.get('.dialog-with-config .rectangular-box').invoke('text').then((text) => {
            cy.log(`Text inside the red rectangle: ${text}`);
        });
    
        // Confirm the dialog box
        cy.get('.dialog-with-config .dialog-footer .btn-primary').click();
    });
    
});
