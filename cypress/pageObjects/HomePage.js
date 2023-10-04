class HomePage {
  getEditBox() {
    return cy.get(".form-group:nth-child(1) > .form-control");
  }
}

export default HomePage;
