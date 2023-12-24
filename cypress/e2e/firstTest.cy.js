/// <reference types="Cypress"/>

describe("template spec", () => {
  before(() => {});
  beforeEach(() => {
    cy.visit("/");
  });

  it("Test 1", () => {
    cy.contains(".menu-title", "Forms").click();
    cy.get('li.menu-item').find('[href="/pages/forms/layouts"]').click()
    cy.contains("Form Layouts").click();
    cy.url()
      .should("eq", "http://localhost:4200/pages/forms/layouts")
      .then(() => {
        console.log("Ova se izvrsuva vednash");
      });
    // cy.log("Ova se izvrsuva vednash")

    // cy.get('[title="Layout"]').click()
    // cy.get
  });

  it.only("Test 2 demostrating variable examples", () => {
    cy.contains(".menu-title", "Layout").click();
    cy.contains(".menu-title", "Stepper").click();
    cy.get(".horizontal h3").then(($value) => {
      let text = $value.text();
      const number = parseInt(text.split("#").pop());
      cy.log(number);
      cy.get(".horizontal button").contains("next").click();
      cy.get(".horizontal h3").then(($value) => {
        let text = $value.text();
        const number2 = parseInt(text.split("#").pop());
        cy.log(number2);
        expect(number).to.not.be.equal(number2);
      });
    });
  });
});
