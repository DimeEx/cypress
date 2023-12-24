/// <reference types="cypress"/>
import {navigateToPage} from "../support/PageObjectsNavigation";

describe('HomeworkTask1Number1: Form Layouts',()=>{
    before (function(){
        cy.fixture("FormLayoutsFixtures").then(function(data){
            this.data=data;
        })
    })
    it('FormLayoutsFixtureTask', function(){
        navigateToPage.FormLayouts();
        navigateToPage.FormTyping();
        navigateToPage.FormSubmiting();
       })
})