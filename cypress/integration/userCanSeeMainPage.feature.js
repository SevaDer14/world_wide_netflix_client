describe("User can see main page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("can see general structure elements", () => {
    it("is expected to show the header", () => {
      cy.get("[data-cy=header]").should("exist");
    });

    it("is expected to show the footer", () => {
      cy.get("[data-cy=footer]").should("exist");
    });

    it("is expected to show the login button", () => {
      cy.get("[data-cy=login-btn]").should("contain", "Login");
    });
  });

  describe("User can click on login button and login modal appears", () => {
    it("is expected to show login modal", () => {
      cy.get("[data-cy=login-btn]").click();
      cy.get("[data-cy=login-modal-header]").should("be.visible");
      cy.get("[data-cy=login-modal-content]").within(() => {
        cy.get("[data-cy=login-email-input]").type("bob.kramer@hotmail.com");
        cy.get("[data-cy=login-password]").type("password");
        cy.get("[data-cy=form-login-btn]").click();
      });
    });
  });

  describe("User can see register form", () => {
    it("is expected to show the registration form", () => {
      cy.get("[data-cy=login-btn]").click();
      cy.get("[data-cy=login-modal-header]").should("be.visible");
      cy.get("[data-cy=login-modal-content]").within(() => {
        cy.get("[data-cy=registration-email-input]").type(
          "bob.kramer@hotmail.com"
        );
        cy.get("[data-cy=registration-password]").type("password");
        cy.get("[data-cy=registration-confirmation-password]").type("password");
        cy.get("[data-cy=form-register-btn]").click();
      });
    });
  });
});
