import CartPage from "./cart_page";
import LoginPage from "./login_page";
import { BASE_URL } from "../helper/constants";

class VerifyCartAfterLogin {
  private cartPage = new CartPage();
  private loginPage = new LoginPage();

  verify(
    items: { productName: string; expectedQuantity: number }[],
    loginName: string,
    password: string,
  ) {
    // Step 1: Verify product rows before logout
    items.forEach(({ productName, expectedQuantity }) => {
      this.assertProductRow(productName, expectedQuantity);
    });

    // Step 2: Assert cart layout elements before logout
    this.assertCartElementsVisible();

    // Step 3: Logout
    cy.contains("a", "Logout").click();

    // Step 4: Login again
    cy.visit(`${BASE_URL}/login`);
    this.loginPage._login(loginName, password);

    // Step 5: Return to cart page
    cy.contains("a", "Cart").click();

    // Step 6: Assert product rows again after login
    items.forEach(({ productName, expectedQuantity }) => {
      this.assertProductRow(productName, expectedQuantity);
    });

    // Step 7: Assert cart layout elements again
    this.assertCartElementsVisible();
  }

  private assertProductRow(productName: string, expectedQuantity: number) {
    this.cartPage.elements.itemRowByName(productName).then(($row) => {
      const row = cy.wrap($row);
      row.find("td").eq(1).find("a").should("contain", productName); // product name
      row.find("td").eq(3).should("not.be.empty"); // unit price
      row.find("td").eq(4).find("input").should("have.value", expectedQuantity.toString()); // quantity
      row.find("td").eq(5).should("not.be.empty"); // total price
      row.find("td").eq(6).find("a.btn").should("exist"); // remove button
    });
  }

  private assertCartElementsVisible() {
    const e = this.cartPage.elements;

    // Cart totals
    e.subTotal().should("exist");
    e.flatShippingRate().should("exist");
    e.totalAmount().should("exist");

    // Buttons
    e.updateBtn().should("exist");
    e.checkoutBtn().should("exist");
    e.continueShoppingBtn().should("exist");

    // Coupon area
    e.couponInput().should("exist");
    e.applyCouponBtn().should("exist");

    // Shipping estimate form
    e.countryDropdown().should("exist");
    e.stateDropdown().should("exist");
    e.zipInput().should("exist");
    e.estimateBtn().should("exist");
    e.shipmentDropdown().should("exist");
  }
}

export default VerifyCartAfterLogin;
