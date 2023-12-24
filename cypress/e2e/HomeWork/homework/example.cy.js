it("Working with implicit Assertions", () => {
    // test step to launch a URL
    cy.visit("https://example.cypress.io/");

    cy.contains("get").click();

    // Implicit assertion using should
    cy.get("#query-btn")
      .should("contain", "Button")
      .should("have.class", "query-btn");

    cy.get("#query-btn").invoke("attr", "id").should("equal", "query-btn");

    // Chaining the assertion using and
    cy.get("#query-btn")
      .should("contain", "Button")
      .and("have.class", "query-btn");
  });

  it("Working with explicit Assertions", () => {

    cy.visit("/pages/layout/accordion");
    cy.get('div.item-body').should('have.length',6);
    cy.location().should((location) => {
      expect(location.href).to.eq('http://localhost:4200/pages/layout/accordion')
      expect(location.pathname).to.eq('/pages/layout/accordion')
      expect(location.port).to.eq('4200')
    })
    cy.get('nb-accordion-item-header').contains('Product Details').click();
    cy.get('div.item-body').should((accord)=>{
      expect(accord).to.have.length(6)
      expect(accord.text()).to.contain("Milky Way");
    })
  });
