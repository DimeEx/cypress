/// <reference types="Cypress"/>
describe('template spec', () => {
    beforeEach(() => {
      cy.visit('/')
  });
  
  it("HomeworkTask2", ()=>{
    cy.visit('/')
    cy.contains(".menu-title","Layout").click();
    cy.contains(".menu-title", "Accordion").click();
    cy.contains(' Reviews ').click();
    cy.get("div[class='ng-tns-c23-26 ng-trigger ng-trigger-accordionItemBody']").then(($value)=>{
        let text = $value.text();
        cy.log(text)
            cy.get("nb-accordion-item-header[class='ng-tns-c22-31 ng-star-inserted accordion-item-header-collapsed']").click();
            cy.get("div[class='ng-tns-c23-32 ng-trigger ng-trigger-accordionItemBody']").then(($value)=>{
                let text2 = $value.text();
                cy.log(text2)
                expect(text).to.be.equal(text2)
        })
     })
})


  it("Clicking on 'Layout', then 'Stepper' and then clicking on 'Next' button", ()=>{
    cy.contains("Layout").click();
    cy.contains(".menu-title", "Stepper").click();
    cy.get(".horizontal h3").then(($value)=>{
        let text = $value.text();
        const number = parseInt(text.split("#").pop())
        cy.log(text)
        cy.log(number)
        cy.get(".horizontal button").contains("next").click()
        cy.get(".horizontal h3").then(($value)=>{
            let text = $value.text()
            const number2 = parseInt(text.split("#").pop())
            expect(number).to.not.be.equal(number2)
            cy.log(text)
            cy.log(number2)
            cy.get(".horizontal button").contains("next").click()
            cy.get(".horizontal h3").then(($value)=>{
                let text = $value.text()
                const number3 = parseInt(text.split("#").pop())
                expect(number2).to.not.be.equal(number3)
                cy.log(text)
                cy.log(number3)
          })
  
       })
    }
    
  )})
  
  it("Clicking on Layout and Accordion in the menu", ()=>{
    cy.get('[title="Layout"]').click();
    cy.get('[title="Accordion"]').click();
    cy.contains("Toggle First Item").click();
    })
   
  it("Clicking on 'Forms', then on 'Form Layouts' and then on the checkbox 'Remember me'",() =>{
    cy.contains(".menu-title", "Forms").click();
    cy.contains(".menu-title", "Form Layouts").click();
    cy.url().should('eq', 'http://localhost:4200/pages/forms/layouts')
    cy.contains("Remember me").click();
  })
  
  it("Clicking 'Modal & Overlays', then click 'Dialog and the interact with page buttons'",() =>{
    cy.contains("Modal & Overlays").click();
    cy.contains("Dialog").click();
    cy.contains('nb-card', 'Open Without Backdrop').contains('Open Dialog with backdrop').click();
    cy.contains('Dismiss Dialog').click();
  })
  
  
  }); 