describe("Navegacion", () => {
  it("Navegar la pagina", () => {
    cy.visit("https://platzi.com");
  });

  it("Recarga la pagina", () => {
    cy.reload();
  });

  it.only("Navegar la pagina", () => {
    cy.visit("https://platzi.com/");
    // {
    //   /* <commands targeting https://platzi.com go here> */
    // }

    cy.origin("https://docs.cypress.io", () => {
      cy.visit("https://docs.cypress.io/");
      // <commands targeting https://docs.cypress.io go here>
    });
    // cy.visit("https://platzi.com");
    // cy.visit("https://docs.cypress.io/");
    // cy.reload(true);
    cy.go("back");
    // cy.go("forward");
    // cy.go(-1);
  });
});
