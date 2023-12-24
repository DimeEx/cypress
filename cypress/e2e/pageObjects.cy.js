import { navigateTo } from "../support/pageObjects/pageNavigation";

describe('Testing with page objects', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Verify page navigation', () => {

        navigateTo.formLayoutPage();
        navigateTo.modalOverlayToasterPage()
        navigateTo.modalOverlayTooltipPage()
        navigateTo.tablesSmartTablePage();
        navigateTo.formsDatepickerPage()
        
    });
});