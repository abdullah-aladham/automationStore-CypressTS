import { BASE_URL } from "../helper/constants";
import LoginPage from "./login_page";
import CartPage from "./cart_page";

class HomePage {
  elements = {
    loginPageBtn: () => cy.contains("a", "Login or register"),
    cartPageBtn: () => cy.contains("a", "Cart"),
  };

  goToLoginPage(): LoginPage {
    cy.visit(BASE_URL);
    this.elements.loginPageBtn().click();

    cy.get("h1.heading1 .maintext")
      .should("be.visible")
      .and("contain.text", "Account Login");
    return new LoginPage();
  }

  goToCartPage(): CartPage {
    cy.visit(BASE_URL);
    this.elements.loginPageBtn().click();

    cy.get("h1.heading1 .maintext")
      .should("be.visible")
      .and("contain.text", "Shopping Cart");
    return new CartPage();
  }
}

export default HomePage;
