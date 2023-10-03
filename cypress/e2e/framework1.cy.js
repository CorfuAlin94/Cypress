/// <reference types="Cypress" />

describe("Frameworks 1", function () {
  // Using Fixtures

  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(".form-group:nth-child(1) > .form-control").type(this.data.name);
    cy.get("select").select(this.data.gender);
    cy.get(".form-group:nth-child(1) > .form-control").should(
      "have.value",
      this.data.name
    );
    cy.get(".form-group:nth-child(1) > .form-control").should(
      "have.attr",
      "minlength",
      2
    );
    cy.get("#inlineRadio3").should("be.disabled");
    cy.pause();

    // Shop page

    cy.get(":nth-child(2) > .nav-link").click();

    //Iterate throw the data array + Add to cart
    this.data.productNames.forEach((element) => {
      cy.selectProduct(element);
    });
  });
});
