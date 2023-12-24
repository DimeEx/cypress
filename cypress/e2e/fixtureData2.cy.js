/// <reference types="cypress" />

const availableFixtures = [
  {
    name: "firstFixture",
    context: "Test with firstFixture File",
  },
  {
    name: "secondFixture",
    context: "Test with secondFixture File",
  },
];




describe("Automation Test Suite - Fixtures2", function () {
  //loop through both fixtures
  availableFixtures.forEach((afixture) => {
    describe(afixture.context, () => {
      before(function () {
        //Mostly used for Setup Part
        cy.fixture(afixture.name).then(function (data) {
          this.data = data;
        });
      });

      it("Working with Fixtures2", function () {
        //Provide the data read from the fixture
        cy.visit("/");
        cy.contains("Auth").click();
        cy.contains("Register").click();

        cy.get("#input-name").type(this.data.Full_name);
        cy.get("#input-email").type(this.data.Email);
        cy.get("#input-password").type(this.data.Password);
        cy.get("#input-re-password").type(this.data.Password);
        cy.get(".custom-checkbox").prev().check({ force: true });
        cy.contains("button", "Register").click();
        cy.location().should((location) => {
          expect(location.pathname).to.equal("/pages");
        });
      });
    });
  });
});
