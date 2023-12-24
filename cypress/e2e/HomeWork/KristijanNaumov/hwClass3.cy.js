describe('template spec', () => {
    //check before enter in to the website
    beforeEach(() => {
        cy.visit('/')
    })

    it('test1', () => {
        //click to Modal & Overlays
    cy.get('[title="Modal & Overlays"]').click()
        //click to Dialog
    cy.get('[title="Dialog"]').find('span').click()
        //click to Open Dialog with component
    cy.contains('Open Dialog with component').click()
    cy.url().should('eq','http://localhost:4200/pages/modal-overlays/dialog')
    })

    it('test2', () => {
                //click to Modal & Overlays
        cy.get('[title="Modal & Overlays"]').click()
                //click to Window
        cy.get('[title="Window"]').find('span').click()
                //click to Open window with template
        cy.contains('Open window with template').click()
        cy.url().should('eq','http://localhost:4200/pages/modal-overlays/window')
        })

    it('test3', () => {
        //click to Layout
        cy.get('[title="Layout"]').click()
        //click to Accordion
        cy.get('[title="Accordion"]').find('span').click()
        //click to Toggle First Item
        cy.contains('Toggle First Item').click()
        //check if review is equal to review2
        cy.get('[class="item-body"]').then(($value)=>{
            let text = $value.text()
            const review = parseInt(text.split("#").pop())
            cy.log(review)
            cy.get('nb-accordion-item-header').contains(' Reviews ').click().then(($value) => {
                let text = $value.text()
                const review2 = parseInt(text.split("#").pop())
                expect(review).to.not.be.equal(review2);

            })

        })

        })
    })

describe('template spec', () => {
    //check before enter in to the website
    beforeEach(() => {
        cy.visit('/')
    })

    it('test1', () => {
   cy.contains('Tables & Data').click()
   cy.contains('Smart Table').click()
   cy.get('tbody').find('tr').find('td').contains('13')
   
   cy.contains('[class="ng2-smart-page-link page-link ng-star-inserted"]','3').click()
   cy.get('tbody').find('tr').find('td').contains('15')
   cy.get('tbody').find('tr').find('td').contains('16')

   cy.contains('[class="ng2-smart-page-link page-link ng-star-inserted"]','4').click()
   cy.get('tbody').find('tr').find('td').contains('15')

   cy.contains('[class="ng2-smart-page-link page-link ng-star-inserted"]','6').click()
   cy.get('tbody').find('tr').find('td').contains('13')
   cy.get('tbody').find('tr').find('td').contains('16')
  })  

  it('test2', () => {
    cy.get('[title="Modal & Overlays"]').click()
    cy.contains('Dialog').click()
    cy.contains('Open Dialog without esc close').click()
    cy.get('nb-card-body').should('contain','this is some additional data passed to dialog')
   cy.get('nb-card-body').then((text) => {
    const texttext = text.text()
    cy.wrap(texttext).should('contain','this is some additional data passed to dialog')
   })
  })
      })
