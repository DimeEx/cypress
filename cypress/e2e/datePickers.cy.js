/// <reference types="Cypress"/>

describe("datePicker", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Working with date picker", () => {
    function selectDayFromCurrent(day) {
        
    let date = new Date();
    date.setDate(date.getDate() + day);
    let futureDay = date.getDate();
    let futureMonth = date.toLocaleDateString("en-US", { month: "short" });
    let futureYear = date.getFullYear();
    cy.log(futureDay);
    let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}`;
    cy.log(dateToAssert);

        cy.get("nb-calendar-navigation")
          .invoke("attr", "ng-reflect-date")
          .then((dateAttribute) => {
            if (
              !dateAttribute.includes(futureMonth) ||
              !dateAttribute.includes(futureYear)
            ) {
              cy.get('[data-name="chevron-right"]').click();
              selectDayFromCurrent(day);
            } else {
              cy.get('.day-cell').not('.bounding-month').contains(futureDay).click();
            }
          });
          return    dateToAssert
      }
    cy.contains(".menu-title", "Forms").click();
    cy.contains("Datepicker").click();

    cy.url().should("eq", "http://localhost:4200/pages/forms/datepicker");
    cy.contains("nb-card", "Common Datepicker")
      .find("input").then((input) => {
        cy.wrap(input).click();
       const dateToAssert =  selectDayFromCurrent(200);
        // cy.get(".day-cell").not("bounding-month").contains(futureDay).click();
        cy.wrap(input).invoke("prop", "value").should("contain", dateToAssert);
        cy.wrap(input).should("have.value", dateToAssert);
      });
  });
});
