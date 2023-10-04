class ProductPage {
  getCheckoutButton() {
    return cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link");
  }

  getCheckoutCart() {
    return cy.get(":nth-child(6) > :nth-child(5) > .btn");
  }
}

export default ProductPage;
