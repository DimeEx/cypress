/// <reference types="Cypress"/>







describe('homework2', () => {
    it('test2', () => {
      cy.visit('/pages/modal-overlays/dialog')
      cy.contains('button', 'Open Dialog with esc close').click()
      let textBox = cy.get('nb-card-body')
      textBox.should('contain.text' , 'Lorem ipsum dolor sit amet')
      let dismissDialog = cy.get('button[status="primary"]')
      dismissDialog.click() //what will happend if you have another like this one locator, You test fill fail... 
    })

         it('test1', () => {
          cy.visit('/pages/tables/smart-table')
          const ageField = cy.get('input[placeholder="Age"]')
          for (let i =13; i<20; i++){
          ageField.type(i)
          cy.wait(1000) 
          cy.get('tbody').find('tr').then(elements=>{
            let countOfElements = 0;
            countOfElements=elements.length
            cy.log(`${countOfElements} are of age ${i} `)
          })       
          ageField.clear()
        }
        })
})

            
        





