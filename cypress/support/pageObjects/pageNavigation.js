function selectGroupName(param) {
  cy.contains("a", param).then((menu) => {
    cy.wrap(menu)
      .find(".expand-state g g")
      .invoke("attr", "data-name")
      .then((attr) => {
        if (attr.includes("left")) {
          cy.wrap(menu).click();
        }
      });
  });
}

export class PageNavigation {
  formLayoutPage() {
    selectGroupName('Forms')
    cy.contains("Form Layouts").click();
  }

  modalOverlayToasterPage() {
    selectGroupName('Modal & Overlays')
    cy.contains("Toastr").click();
  }

  modalOverlayTooltipPage() {
    selectGroupName('Modal & Overlays')
    cy.contains("Tooltip").click();
  }

  tablesSmartTablePage() {
    selectGroupName('Tables & Data')
    cy.contains("Smart Table").click();
  }

  formsDatepickerPage() {
    selectGroupName('Forms')
    cy.contains("Datepicker").click();
  }
}

export const navigateTo = new PageNavigation();
