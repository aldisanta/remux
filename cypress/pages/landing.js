class Landing {
  static visit() {
    cy.visit("/");
  }

  static onLanding() {
    cy.get("h1").contains("Welcome to Remix");
  }

  static docExist() {
    cy.get("ul")
      .children()
      .should("contain", "Remix Docs");
  }

}

export default Landing;
