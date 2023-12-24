/// <reference types="cypress" />

describe("My first test in Cypress", () => {
  it("Visit testing application and open Extra Components", () => {
    //open home page

    cy.visit("/");

    //clicking on Forms menu item

    cy.contains(".menu-title", "Extra Components").click();

    //clicking on form Extra Components menu subcategory item

    cy.contains(".menu-title", "Calendar").click();
    cy.url().should(
      "eq",
      "http://localhost:4200/pages/extra-components/calendar"
    );
    cy.contains("Selected date");
  });

  it("Visit testing application and open forms layout", () => {
    //open home page

    cy.visit("/");

    //clicking on Forms menu item

    cy.contains(".menu-title", "Forms").click();

    //clicking on form layouts menu subcategory item

    cy.contains(".menu-title", "Datepicker").click();
    cy.url().should("eq", "http://localhost:4200/pages/forms/datepicker");
    cy.contains("Common Datepicker");
  });

  it("Visit testing application and open Modal and overlays", () => {
    //open home page

    cy.visit("/");

    //clicking on Forms menu item

    cy.contains(".menu-title", "Modal & Overlays").click();

    //clicking on form layouts menu subcategory item

    cy.contains(".menu-title", "Popover").click();
    cy.url().should("eq", "http://localhost:4200/pages/modal-overlays/popover");
    cy.contains("Popover Position");
  });

  it("Visit testing application and open Modal and overlays", () => {
    //open home page

    cy.visit("/");

    //clicking on Forms menu item

    cy.contains(".menu-title", "Modal & Overlays").click();

    //clicking on form layouts menu subcategory item

    cy.contains(".menu-title", "Toastr").click();
    cy.url().should("eq", "http://localhost:4200/pages/modal-overlays/toastr");
    cy.get(
      'button.appearance-filled.size-medium.status-primary.shape-rectangle.transitions[aria-disabled="false"][tabindex="0"]'
    );
  });

  it("Visit testing application and open Modal and overlays", () => {
    //open home page

    cy.visit("/");

    //clicking on Forms menu item

    cy.contains(".menu-title", "Modal & Overlays").click();

    //clicking on form Model menu subcategory item

    cy.contains(".menu-title", "Tooltip").click();
    cy.url().should("eq", "http://localhost:4200/pages/modal-overlays/tooltip");
    cy.contains("Tooltip With Icon");
  });

  it("Visit testing application and open Modal and overlays", () => {
    //open home page

    cy.visit("/");

    //clicking on Forms menu item

    cy.contains(".menu-title", "Modal & Overlays").click();

    //clicking on form layouts menu subcategory item

    cy.contains(".menu-title", "Window").click();
    cy.url().should("eq", "http://localhost:4200/pages/modal-overlays/window");
    cy.get(
      'button.appearance-filled.size-medium.status-primary.shape-rectangle.transitions[aria-disabled="false"][tabindex="0"]'
    );
  });

  it("Visit testing application and open Modal and overlays", () => {
    //open home page

    cy.visit("/");

    //clicking on Forms menu item

    cy.contains(".menu-title", "Modal & Overlays").click();

    //clicking on form layouts menu subcategory item

    cy.contains(".menu-title", "Dialog").click();
    cy.url().should("eq", "http://localhost:4200/pages/modal-overlays/dialog");
    cy.contains("Open Dialog with component");
  });
  it("Visit testing application and open forms layout", () => {
    //open home page

    cy.visit("/");

    //clicking on Forms menu item

    cy.contains(".menu-title", "Layout").click();

    //clicking on form layouts menu subcategory item

    cy.contains(".menu-title", "Stepper").click();
    cy.url().should("eq", "http://localhost:4200/pages/layout/stepper");
    cy.contains("next").click();
  });

  it("Visit testing application and open forms layout", () => {
    //open home page

    cy.visit("/");

    //clicking on Forms menu item

    cy.contains(".menu-title", "Forms").click();

    //clicking on form layouts menu subcategory item

    cy.contains(".menu-title", "Form Layout").click();
    cy.url().should("eq", "http://localhost:4200/pages/forms/layouts");
    cy.get('.form-inline > [placeholder="Email"]').click();
    cy.get('.form-inline > [placeholder="Email"]').type("yahobt@bitola.com");
  });

  it.only('should check if text inside "Product details" and "Reviews" buttons is the same', () => {
    // Use appropriate selectors to target the buttons
    cy.visit("http://localhost:4200/pages/layout/accordion");

    cy.get(".accordion-group .accordion-toggle")
      .contains("Product details")
      .invoke("text")
      .as("productDetailsButtonText");

    cy.get(".accordion-group .accordion-toggle")
      .contains("Reviews")
      .invoke("text")
      .as("reviewsButtonText");

    // Use alias to get the text and compare
    cy.get("@productDetailsButtonText").then((productDetailsText) => {
      cy.get("@reviewsButtonText").should("equal", productDetailsText);
    });
  });
});
