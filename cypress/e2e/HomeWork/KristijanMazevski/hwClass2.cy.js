/// <reference types="Cypress"/>

describe("template spec", () => {
  it("passes", () => {
    cy.visit("/pages/modal-overlays/dialog");

    cy.contains("button", "Open Dialog with component").click();
    cy.contains("button", "Dismiss Dialog").should("be.visible");
  });
  it("test2", () => {
    cy.visit("/pages/forms/layouts");

    cy.get('input[placeholder="Jane Doe"]').type("Kristijan Mazhevski");
    cy.get('input[placeholder="Email"]').eq(0).type("kristijan@gmail.com");
    cy.contains("button", "Submit").eq(0).click();
  });
  it("test3", () => {
    cy.visit("/pages/forms/layouts");
    cy.get('input[placeholder="Email"]').eq(1).type("kristijan@gmail.com");
    cy.get('input[placeholder="Password"]').eq(0).type("kristijan");
    cy.get("span.inner-circle").eq(0).click();
    cy.contains("button", "Sign in").eq(0).click();
  });
  it("test4", () => {
    cy.visit("/pages/modal-overlays/window");
    cy.contains("button", "Open window form").click();
    cy.get("input#subject").type("kristijan");
    cy.get("textarea#text").type("kristijan");
  });
  it("test5 ", () => {
    cy.visit("/pages/layout/stepper");

    cy.contains("button", "next").eq(0).click();
    cy.contains("button", "next").eq(0).click();
    cy.contains("button", "next").eq(0).click();
  });
});
