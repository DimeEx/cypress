/// <reference types="Cypress"/>

describe("Count Teenagers in Table", () => {
  it("Test1", () => {
    cy.visit("/");

    cy.contains("Tables & Data").click();
    cy.get('[title="Smart Table"]')
      .find("span")
      .should("contain.text", "Smart Table")
      .click();
    cy.get("tbody")
      .contains("tr", "Larry")
      .then((tableRow) => {
        cy.wrap(tableRow).find("td").last().should("contain", "18");

        cy.get("tbody")
          .contains("tr", "Sevan")
          .then((tableRow) => {
            cy.wrap(tableRow).find("td").last().should("contain", "13");
            cy.get("[aria-label='Next']").click();
            cy.get("tbody")
              .contains("tr", "Francisca")
              .then((tableRow) => {
                cy.wrap(tableRow).find("td").last().should("contain", "11");

                cy.get("tbody")
                  .contains("tr", "Griffin")
                  .then((tableRow) => {
                    cy.wrap(tableRow).find("td").last().should("contain", "19");
                    cy.get("[aria-label='Next']").click();
                    cy.get("tbody")
                      .contains("tr", "Newman")
                      .then((tableRow) => {
                        cy.wrap(tableRow)
                          .find("td")
                          .last()
                          .should("contain", "15");
                        cy.get("[aria-label='Next']").click();
                        cy.get("tbody")
                          .contains("tr", "Haynes")
                          .then((tableRow) => {
                            cy.wrap(tableRow)
                              .find("td")
                              .last()
                              .should("contain", "15");

                            cy.get("tbody")
                              .contains("tr", "Holden")
                              .then((tableRow) => {
                                cy.wrap(tableRow)
                                  .find("td")
                                  .last()
                                  .should("contain", "11");
                                cy.get("[aria-label='Next']").click();

                                cy.get("[aria-label='Next']").click();
                                cy.get("tbody")
                                  .contains("tr", "Bennett")
                                  .then((tableRow) => {
                                    cy.wrap(tableRow)
                                      .find("td")
                                      .last()
                                      .should("contain", "13");
                                    cy.get("tbody")
                                      .contains("tr", "Lou")
                                      .then((tableRow) => {
                                        cy.wrap(tableRow)
                                          .find("td")
                                          .last()
                                          .should("contain", "16");
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  });
});

it("Test 2", () => {
  cy.visit("/");
  cy.get('[title="Modal & Overlays"]')
    .find("span")
    .should("contain.text", "Modal & Overlays")
    .click();
  cy.contains(".menu-title", "Dialog").click();
  cy.get(":nth-child(3) > nb-card > nb-card-body > :nth-child(2)").click();
  cy.get(".ng-star-inserted > nb-card-body")
    .should("be.visible")
    .and("have.text", "this is some additional data passed to dialog")
    .invoke("text")
    .as("Text1");
  console.log("@Text1");
  cy.on("window:confirm", (confirm) => {
    expect(confirm).to.equal("@Text1");
  });
});
