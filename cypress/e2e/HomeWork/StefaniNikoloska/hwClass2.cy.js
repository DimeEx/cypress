/// <reference types="Cypress"/>

describe('My First Test in Cypress', () => {
    beforeEach(() => {
    cy.visit('/');
    cy.wait(1000);
 });

  it('Visit testing application and open Layout', () => {
    //Click on Layout menu item
    cy.get('[title="Layout"]').click()
    cy.url().should('eq','http://localhost:4200/pages');
    cy.wait(1000);

    //Click on subcategory item 'Stepper'
    cy.contains('.menu-title','Stepper').click();
    cy.get('.horizontal').find('h3').should('contain.text','Step content #1');
    cy.url().should('eq','http://localhost:4200/pages/layout/stepper'); 
    //cy.contains('nb-stepper','horizontal').find('button')
    cy.wait(1000);

     //Click on subcategory item 'Accordion'
     cy.contains('.menu-title','Accordion').click();

     //Check if the two texts are equal
     cy.contains('Reviews').click();
     cy.get('.ng-tns-c25-26 > .item-body').invoke('text').then((text1) => {
      expect(text1).to.eq(' A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ');
     cy.wait(1000);
     cy.get(':nth-child(2) > .accordion-item-header-collapsed').click();
     cy.get('.ng-tns-c25-32 > .item-body').invoke('text').then((text2) => {
      expect(text2).to.eq(' A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. ');
     cy.wait(1000);
      expect(text1).to.be.equal(text2);
      cy.log('The two texts are equal');
     });
     });
     console.log('The Layout menu item and the subcategory items are clickable');
     cy.wait(1500);
});

  it('Visit testing application and open Forms', () => {
    //Click on Forms menu item
    cy.get('[title="Forms"]').click()
    cy.url().should('eq','http://localhost:4200/pages');
    cy.wait(1000);

    //Click on subcategory item 'Form Layouts'
    cy.contains('.menu-title','Form Layouts').click();
    cy.get('.col-md-6').eq(1).find('nb-card-header').should('contain.text','Basic form','Block form');
    cy.url().should('eq','http://localhost:4200/pages/forms/layouts'); 
    cy.wait(1000);
    
    //Click on subcategory item 'Datepicker'
    cy.contains('.menu-title','Datepicker').click();
    cy.get('.row').find('nb-card-header').should('contain.text','Datepicker With Range');
    cy.url().should('eq','http://localhost:4200/pages/forms/datepicker'); 
    console.log('The Forms menu item and the subcategory items are clickable');
    cy.wait(1500);
});

  it('Visit testing application and open Modal & Overlays', () => {
    //Click on Modal & Overlays menu item
    cy.get('[title="Modal & Overlays"]').click();
    cy.url().should('eq','http://localhost:4200/pages');
    cy.wait(1000);

    //Click on subcategory item 'Dialog'
    cy.contains('.menu-title','Dialog').click();
    cy.get('.form-input-card').find('nb-card-header').should('contain.text','Return Result From Dialog');
    cy.url().should('eq','http://localhost:4200/pages/modal-overlays/dialog'); 
    cy.wait(1000);
  
    //Click on subcategory item 'Window'
    cy.contains('.menu-title','Window').click();
    cy.get('.row').find('nb-card-header').should('contain.text','Window Without Backdrop');
    cy.url().should('eq','http://localhost:4200/pages/modal-overlays/window'); 
    cy.wait(1000);
 
    //Click on subcategory item 'Popover'
    cy.contains('.menu-title','Popover').click();
    cy.get('.col-lg-6').find('nb-card-header').should('contain.text','Simple Popovers');
    cy.url().should('eq','http://localhost:4200/pages/modal-overlays/popover'); 
    cy.wait(1000);

    //Click on subcategory item 'Toastr'
    cy.contains('.menu-title','Toastr').click();
    cy.get('.ng-star-inserted').find('button').should('contain.text','Show toast');
    cy.url().should('eq','http://localhost:4200/pages/modal-overlays/toastr');
    cy.wait(1000);

    //Click on subcategory item 'Tooltip'
    cy.contains('.menu-title','Tooltip').click();
    cy.get('.row').find('nb-card-header').should('contain.text','Tooltip With Icon');
    cy.url().should('eq','http://localhost:4200/pages/modal-overlays/tooltip');
    console.log('The Modal & Overlays menu item and the subcategory items are clickable');
    cy.wait(1500);  
});

  it('Visit testing application and open Extra Components', () => {
    //Click on Extra Components menu item
    cy.get('[title="Extra Components"]').click();
    cy.url().should('eq','http://localhost:4200/pages');
    cy.wait(1000);

    //Click on subcategory item 'Calendar'
    cy.contains('.menu-title','Calendar').click();
    cy.get('.calendar-container').find('span').should('contain.text','Selected date: Dec 15, 2023');
    cy.url().should('eq','http://localhost:4200/pages/extra-components/calendar');
    console.log('The Extra Components menu item and the subcategory items are clickable');
    cy.wait(1500);
});

   it('Visit testing application and open Tables & Data', () => {
    //Click on Tables & Data menu item
    cy.get('[title="Tables & Data"]').click();
    cy.url().should('eq','http://localhost:4200/pages');
    cy.wait(1000);

    //Click on subcategory item 'Smart Table'
    cy.contains('.menu-title','Smart Table').click();
    cy.get('.ng-star-inserted').find('nb-card').should('contain.text','Smart Table');
    cy.url().should('eq','http://localhost:4200/pages/tables/smart-table');
    cy.wait(1000);

    //Click on subcategory item 'Tree Grid'
    cy.contains('.menu-title','Tree Grid').click();
    cy.get('.fixed').eq(2).find('ngx-footer').should('contain.text','Created with ♥ by');
    cy.url().should('eq','http://localhost:4200/pages/tables/tree-grid');
    console.log('The Tables & Data menu item and the subcategory items are clickable');
    cy.wait(1500);
});

   it('Visit testing application and open Auth', () => {
    //Click on Auth menu item
    cy.get('[title="Auth"]').click();
    cy.url().should('eq','http://localhost:4200/pages');
    cy.wait(1000);

    //Click on subcategory item 'Login'
    cy.contains('.menu-title','Login').click();
    cy.get('.ng-star-inserted').find('h1').should('contain.text','Login');
    cy.get('.sub-title').should('contain.text','Hello! Log in with your email.');
    cy.url().should('eq','http://localhost:4200/auth/login');
    console.log('The Auth menu item and the subcategory items are clickable');
    cy.wait(1500);
});
});
