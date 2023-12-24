/// <reference types="Cypress"/>
beforeEach(() => {
    cy.visit('/');
  });
  
  describe('template spec', () => {
    it('Clicking on Layout', () => {
  
      cy.get('[title="Layout"]')
        .find("span")
        .should("contain.text", "Layout")
        .click();
      cy.contains('.menu-title', 'Stepper').click();
      cy.url()
        .should("eq", "http://localhost:4200/pages/layout/stepper");
      cy.contains(".menu-title", "Accordion").click();
      let Text1, Text2;
      cy.get("div[class='ng-tns-c25-26 ng-trigger ng-trigger-accordionItemBody']").should(($div) => {
        Text1 = $div.text();
      });
      cy.get("div[class='ng-tns-c25-32 ng-trigger ng-trigger-accordionItemBody']").should(($div) => {
        Text2 = $div.text();
        expect(Text1).to.be.equal(Text2);
      });
    });
  });
  
  it('Clicking on Forms', () => {
  
    cy.get('[title="Forms"]').click();
    cy.contains(".menu-title", 'Form Layouts').should("be.visible").click();
    cy.get("#inputEmail1").should("be.visible").type("Test");
    cy.get("#inputEmail1").should("have.value", "Test");
    cy.get("#inputPassword2").should("be.visible").type("Test123");
    cy.get("#inputPassword2").should("have.value", "Test123");
    cy.get("#inputEmail1")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .click();
  
  });
  
  it('Clicking on Modal & Overlays ', () => {
  
    cy.get('[title="Modal & Overlays"]').should("be.visible")
      .find("span")
      .should("contain.text", "Modal & Overlays")
      .click();
    cy.contains(".menu-title", "Dialog").click();
    cy.contains("button", "Open Dialog with component").should("be.visible").click();
  
  });
  
  it('Clicking on Extra Components', () => {
  
    cy.contains(".menu-title", "Extra Components").should("contain.text", "Extra Components").click();
    cy.get('[title="Calendar"]')
      .find("span")
      .should("contain.text", "Calendar")
      .click();
  
  });
  
  it('Clicking on Tables & Data', () => {
  
    cy.get('[title="Tables & Data"]')
      .find("span")
      .should("contain.text", "Tables & Data")
      .click();
    cy.contains(".menu-title", "Smart Table").should("contain.text", "Smart Table").click();
    cy.get('[placeholder="ID"]').type("18");
    cy.get('[placeholder="ID"]').should("have.value", "18");
  });
  
  it('Clicking on Auth', () => {
  
    cy.contains(".menu-title", "Auth").should("be.visible").click();
    cy.get('[title="Login"]')
      .find("span")
      .should("contain", "Login")
      .click();
    cy.get("#input-email").should("be.visible").type("Test1@test.com");
    cy.get("#input-password").type("Test123");
    cy.get('button.appearance-filled.full-width.size-large.status-primary.shape-rectangle.transitions')
      .should('contain.text', 'Log In')
      .click();
    cy.url().should("eq", "http://localhost:4200/pages");
  });
  