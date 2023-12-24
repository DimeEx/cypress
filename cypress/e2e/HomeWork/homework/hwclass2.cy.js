/// <reference types="Cypress"/>
describe('Class 2 homework', () => {
    
    beforeEach(() => {
        cy.visit("/");
      });
    
      it("Layout > Stepper", () => {
        cy.contains(".menu-title", "Layout").click();
        cy.contains("Stepper").click();
        cy.url().should("eq", "http://localhost:4200/pages/layout/stepper")
        cy.get('.step-content').find('button').contains('next').click()
      });

      it("Layout > Accordion", () => {
        cy.contains(".menu-title", "Layout").click();
        cy.contains("Accordion").click();
        cy.url().should("eq", "http://localhost:4200/pages/layout/accordion")
        cy.get('nb-card-body').find('button').click()
      });

      it("Forms > Form Layouts", () => {
        cy.contains(".menu-title", "Forms").click();
        cy.contains("Form Layouts").click();
        cy.url().should("eq", "http://localhost:4200/pages/forms/layouts")
        cy.get('.form-inline').find('[placeholder="Jane Doe"]').type('dime')
      });

      it("Forms > Form Layouts", () => {
        cy.contains(".menu-title", "Forms").click();
        cy.contains("Datepicker").click();
        cy.url().should("eq", "http://localhost:4200/pages/forms/datepicker")
        cy.get("nb-card-body").find('[placeholder="Form Picker"]').click();
        cy.get('nb-calendar-day-cell').contains('18').click();
        
      });

    it('Modal & Overlays > Dialog ', () => {
        cy.contains(".menu-title", "Modal & Overlays").click();
        cy.contains("Dialog").click();
        cy.url().should("eq", "http://localhost:4200/pages/modal-overlays/dialog")
        cy.get('nb-card-body').find('button').contains('Open Dialog without backdrop').click();
        cy.get('nb-card-footer').find('button').click()
    });

    it('Modal & Overlays > Window ', () => {
        cy.contains(".menu-title", "Modal & Overlays").click();
        cy.contains("Window").click();
        cy.url().should("eq", "http://localhost:4200/pages/modal-overlays/window")
        cy.get('nb-card-body').find('button').contains('Open window form').click();
        cy.get('[data-name="close"]').click()
    });

    it('Modal & Overlays > Popover ', () => {
        cy.contains(".menu-title", "Modal & Overlays").click();
        cy.contains("Popover").click();
        cy.url().should("eq", "http://localhost:4200/pages/modal-overlays/popover")
        cy.get('nb-card-body').contains('button','Left').click();
    });

    it('Modal & Overlays > Toaster', () => {
        cy.contains(".menu-title", "Modal & Overlays").click();
        cy.contains("Toastr").click();
        cy.url().should("eq", "http://localhost:4200/pages/modal-overlays/toastr")
        cy.get('nb-card-footer').find('button.status-primary').click();
    });

    it('Modal & Overlays > Tooltip ', () => {
        cy.contains(".menu-title", "Modal & Overlays").click();
        cy.contains("Tooltip").click();
        cy.url().should("eq", "http://localhost:4200/pages/modal-overlays/tooltip")
        cy.get('nb-card-body').contains('Show Tooltip').click();
    });
    
    it('Extra Components > Calendar ', () => {
        cy.contains(".menu-title", "Extra Components").click();
        cy.contains("Calendar").click();
        cy.url().should("eq", "http://localhost:4200/pages/extra-components/calendar")
        cy.get('nb-calendar-day-cell').contains('20').click();
    });

    it('Tables & Data > Smart Table ', () => {
        cy.contains(".menu-title", "Tables & Data").click();
        cy.contains("Smart Table").click();
        cy.url().should("eq", "http://localhost:4200/pages/tables/smart-table")
        cy.get('li.page-item').contains('a','2').click();
    });

    it('Tables & Data > Tree Grid ', () => {
        cy.contains(".menu-title", "Tables & Data").click();
        cy.contains("Tree Grid").click();
        cy.url().should("eq", "http://localhost:4200/pages/tables/tree-grid")
        cy.get('tr').find('td').contains('Projects').click();
    });
     it('Auth > Login ', () => {
        let  = cy.contains(".menu-title", "Auth")
        authMenu.click(0)
        cy.contains(".menu-title", "Auth").click();
        cy.get("li.menu-item").find('[title="Login"]').click();
        cy.url().should("eq", "http://localhost:4200/auth/login")
        cy.get('[data-name="arrow-back"]').click();
    });
    it('Auth > Register ', () => {
        cy.contains(".menu-title", "Auth").click();
        cy.get("li.menu-item").find('[title="Register"]').click();
        cy.url().should("eq", "http://localhost:4200/auth/register")
        cy.get('[data-name="arrow-back"]').click();
    });
    it('Auth > Request Password ', () => {
        cy.contains(".menu-title", "Auth").click();
        cy.get("li.menu-item").find('[title="Request Password"]').click();
        cy.url().should("eq", "http://localhost:4200/auth/request-password")
        cy.get('[data-name="arrow-back"]').click();
    });
    it('Auth > Reset Password ', () => {
        cy.contains(".menu-title", "Auth").click();
        cy.get("li.menu-item").find('[title="Reset Password"]').click();
        cy.url().should("eq", "http://localhost:4200/auth/reset-password")
        cy.get('[data-name="arrow-back"]').click();
    });
   
    it("Compare two texts in accordion menu", ()=>{
        cy.visit('/')
        cy.contains(".menu-title","Layout").click();
        cy.contains(".menu-title", "Accordion").click();
        cy.contains('Reviews').click();
        cy.get("nb-accordion-item.expanded").find('.item-body').then(($value)=>{
            let text = $value.text();
                cy.get('.accordion-item-header-collapsed').contains('Reviews').click();
                cy.get('nb-accordion-item.expanded').eq('1').find('.item-body').then(($value)=>{
                    let text2 = $value.text();
                    expect(text).to.be.equal(text2)
            })
         })
    })

    it.skip("Compare two texts in accordion menu", () => {
      cy.visit("/");
      cy.contains(".menu-title", "Layout").click();
      cy.contains(".menu-title", "Accordion").click();
      
      cy.get(".accordion-item-header-collapsed").contains("Reviews").click();
      cy.get("nb-accordion-item.expanded").eq("0").find(".item-body").invoke("text").as('textOne')

      cy.get(".accordion-item-header-collapsed").contains("Reviews").click();
      cy.get("nb-accordion-item.expanded")
        .eq("1")
        .find(".item-body")
        .invoke("text")
        .as('textTwo')

    cy.get('@textOne').then((text1)=>{
       
        cy.get("@textTwo").should('equal',text1)
     })
    });

});