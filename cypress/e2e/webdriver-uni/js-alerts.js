/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://www.webdriveruniversity.com");
    // cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  });
});
