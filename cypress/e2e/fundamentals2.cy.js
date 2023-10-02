// <reference types="Cypress" />;

describe("Fundamentals 2", () => {
  it("Visits Rahul 2", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");

    // Checkboxes

    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1")
      .uncheck()
      .should("not.be.checked")
      .and("have.value", "option1");
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);

    // Static dropdowns

    cy.get("select").select("option2").should("have.value", "option2");

    // Dynamic dropdowns

    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() == "Indonesia") {
        $el.click();
      }
    });
    cy.get("#autocomplete").should("have.value", "Indonesia");

    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() == "Indonesia") {
        $el.click();
      }
    });

    // Radio Buttons

    // cy.get("#radio-btn-example > fieldset label").each(($el, index, $list) => {
    //   console.log($el);
    // });

    cy.get('[for="radio1"] > .radioButton').click();
    cy.get('[for="radio1"] > .radioButton').should("have.value", "radio1");
  });
});

//Visible - Invisible
cy.get("#displayed-text").should("be.visible");
cy.get("#hide-textbox").click();
cy.get("#displayed-text").should("not.be.visible");
cy.get("#show-textbox").click();
cy.get("#displayed-text").should("be.visible");
