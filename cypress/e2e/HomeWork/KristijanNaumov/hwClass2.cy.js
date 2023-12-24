describe("template spec", () => {
  //check before enter in to the website
  beforeEach(() => {
    cy.visit("/");
  });

  it("test1", () => {
    //click to Modal & Overlays
    cy.get('[title="Modal & Overlays"]').click();
    //click to Dialog
    cy.get('[title="Dialog"]').find("span").click();
    //click to Open Dialog with component
    cy.contains("Open Dialog with component").click();
    cy.url().should("eq", "http://localhost:4200/pages/modal-overlays/dialog");
  });

  it("test2", () => {
    //click to Modal & Overlays
    cy.get('[title="Modal & Overlays"]').click();
    //click to Window
    cy.get('[title="Window"]').find("span").click();
    //click to Open window with template
    cy.contains("Open window with template").click();
    cy.url().should("eq", "http://localhost:4200/pages/modal-overlays/window");
  });

  it("test3", () => {
    //click to Layout
    cy.get('[title="Layout"]').click();
    //click to Accordion
    cy.get('[title="Accordion"]').find("span").click();
    //click to Toggle First Item
    cy.contains("Toggle First Item").click();
    //check if review is equal to review2
    cy.get('[class="item-body"]').then(($value) => {
      let text = $value.text();
      const review = parseInt(text.split("#").pop());
      cy.log(review);
      cy.get("nb-accordion-item-header")
        .contains(" Reviews ")
        .click()
        .then(($value) => {
          let text = $value.text();
          const review2 = parseInt(text.split("#").pop());
          expect(review).to.not.be.equal(review2);
        });
    });
  });
});
