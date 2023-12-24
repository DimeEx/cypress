/// <reference types="cypress" />

describe("Working with web elements", () => {
  it("Extract text values from a web", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    //Method 1
    cy.get('[for="exampleInputEmail1"]').should("contain", "Email address");

    //Method 2
    cy.get('[for="exampleInputEmail1"]').then((label) => {
      const labelText = label.text();
      expect(labelText).to.be.equal("Email address");
      //or
      cy.wrap(labelText).should("contain", "Email address");
    });
    //Method 3
    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Email address");
      });
    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .as("labelText")
      .should("contain", "Email address");

    //Method 4
    cy.get('[for="exampleInputEmail1"]')
      .invoke("attr", "class")
      .then((classValue) => {
        expect(classValue).to.equal("label");
      });
    //Method 5
    cy.get("#exampleInputEmail1").type("test@test.com");
    cy.get("#exampleInputEmail1")
      .invoke("prop", "value")
      .should("contain", "test@test.com")
      .then((property) => {
        expect(property).to.equal("test@test.com");
      });
  });

  it("Working with radio buttons", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.contains("nb-card", "Using the Grid")
      .find('[type="radio"]')
      .then((radioButton) => {
        cy.wrap(radioButton).eq(0).check({ force: true }).should("be.checked");
        cy.wrap(radioButton).eq(1).should("not.be.checked");
        cy.wrap(radioButton).eq(2).should("be.disabled");
      });
  });

  it("Working with checkboxes", () => {
    cy.visit("/");
    cy.contains("Modal & Overlays").click();
    cy.contains("Toastr").click();

    cy.get('[type="checkbox"]').check({ force: true }).should("be.checked");
    cy.get('[type="checkbox"]')
      .uncheck({ force: true })
      .should("not.be.checked");
  });

  it("Working with lists and dropdowns", () => {
    cy.visit("/");

    // cy.get('nav').find('nb-select').click();
    // cy.get('.options-list').contains('Cosmic').click();
    // cy.get('nav').find('nb-select').should('contain','Cosmic');

    cy.get("nav")
      .find("nb-select")
      .then((dropDown) => {
        cy.wrap(dropDown).click();
        cy.get(".options-list")
          .find("nb-option")
          .each((el) => {
            const itemText = el.text().trim();
            cy.wrap(el).click();
            cy.wrap(dropDown).should("contain", itemText);
            cy.wrap(dropDown).click();
          });
      });
  });

  it("Working with web tables", () => {
    cy.visit("/");
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();
    cy.get("tbody")
      .contains("tr", "John")
      .then((tableRow) => {
        cy.wrap(tableRow).find(".nb-edit").click();
        cy.wrap(tableRow).find('[placeholder="Age"]').clear().type("30");
        cy.wrap(tableRow).find(".nb-checkmark").click();
        cy.wrap(tableRow).find("td").last().should("contain", "30");
      });
  });

  it("Working with tooltips", () => {
    cy.visit("/");
    cy.contains("Modal & Overlays").click();
    cy.contains("Tooltip").click();

    cy.contains("nb-card", "Colored Tooltips")
      .find("button")
      .each((tooltips) => {
        cy.wrap(tooltips).click();
        cy.get("nb-tooltip").should("have.text", "This is a tooltip");
      });
  });

  it("Working with popups", () => {
    cy.visit("/");
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();

    //*********** CONFIRMING THE MESSAGE ***********

    cy.get("tbody")
      .contains("tr", "John")
      .then((tableRow) => {
        cy.wrap(tableRow).find(".nb-trash").click();
      });
    cy.on("window:confirm", (confirm) => {
      expect(confirm).to.equal("Are you sure you want to delete?");
    });

    //   ******* Cancel the message ************
    cy.get("tbody")
      .contains("tr", "John")
      .then((tableRow) => {
        cy.wrap(tableRow).find(".nb-trash").click();
      });
    cy.on("window:confirm", () => false);

    // ************* USING STUBBING *************

    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.get("tbody")
      .contains("tr", "John")
      .then((tableRow) => {
        cy.wrap(tableRow)
          .find(".nb-trash")
          .click()
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWith(
              "Are you sure you want to delete?"
            );
          });
      });
  });
  it("should find all the teenagers in the web table", () => {
    cy.visit("/");
    cy.contains(".menu-title", "Tables & Data").click();
    cy.contains("Smart Table").click();
    cy.url().should("eq", "http://localhost:4200/pages/tables/smart-table");


    cy.get("tbody").find("tr").each((row, index)=>{
        let counter = 0;
         let currentAge = row.find('td').last().eq(index).text();
         cy.log(currentAge);
         if (currentAge < 20 && currentAge > 12) {
             counter++;
            }
      

        cy.log(counter);
      });
    
  });


  it.only("should find all the teenagers in the web table", () => {
    let counter = 0;
    cy.visit("/");
    cy.contains(".menu-title", "Tables & Data").click();
    cy.contains("Smart Table").click();
    cy.url().should("eq", "http://localhost:4200/pages/tables/smart-table");
    function countAge() {
      cy.get("tbody tr").each(($row, index) => {
        cy.wrap($row)
          .find("td").last().each(($cell) => {
            cy.wrap($cell).then((age) => {
              let currentAge = parseInt(age.text());
              if (currentAge > 12 && currentAge < 20) {
                counter++;
              }
            });
          });
          cy.log(index)
        if (index === 9) {
            cy.get("li.page-item").eq(6).then((arrow) => {      
              if (arrow.attr('class').includes('disabled')) {
                cy.log("last page");
                cy.log("There are: "+counter+" teenagers")
              } else {
                cy.wrap(arrow).find(".page-link-next")
                  .click()
                  .then(() => {
                    countAge();
                  });
              }
            }); 
        }
      });
    }

    countAge();
    
  });
});
