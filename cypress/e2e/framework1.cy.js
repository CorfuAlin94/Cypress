//Page Object Designs
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

describe("Frameworks 1", function () {
  // Using Fixtures

  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("My FirstTest case", function () {
    //Initialize Classes
    let homePage = new HomePage();
    let productPage = new ProductPage();

    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getEditBox().type(this.data.name);
    cy.get("select").select(this.data.gender);
    homePage.getEditBox().should("have.value", this.data.name);
    homePage.getEditBox().should("have.attr", "minlength", 2);
    cy.get("#inlineRadio3").should("be.disabled");
    // cy.pause();

    // Shop page

    cy.get(":nth-child(2) > .nav-link").click();

    //Iterate throw the data array + Add to cart
    this.data.productNames.forEach((element) => {
      cy.selectProduct(element);
    });
    productPage.getCheckoutButton().click();
    productPage.getCheckoutCart().click();

    //Delivery Page

    cy.get("#country").type("Romania");
    cy.get(".suggestions > ul > li > a").click();
    cy.get(".checkbox").click({ force: true });
    cy.get(".ng-untouched > .btn").click();
  });
});
