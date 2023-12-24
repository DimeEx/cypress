/// <reference types="cypress" />

describe("Automation suite - Fixtures", () => {
  before(function () {
    cy.fixture("firstFixture").then(function (data) {
      this.data = data;
    });
  });

  it.only("Working with fixture", function () {
    cy.visit("/");
    cy.contains(".menu-title", "Auth").click();
    cy.get("li.menu-item").find('[title="Register"]').click();

    cy.get('[name="fullName"]').type(this.data.Full_name);
    cy.get('[name="email"]').type(this.data.Email);
    cy.get('[name="password"]').type(this.data.Password);
    cy.get('[name="rePass"]').type(this.data.Password);
    cy.get('[type="checkbox"]').check({force:true});
    cy.contains('button','Register').click()
    cy.location().should((location)=>{

        expect(location.pathname).to.equal('/pages')
    })
  });
});
