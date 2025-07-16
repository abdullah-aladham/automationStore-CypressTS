import LoginPage from "./login_page";
import { BASE_URL } from "../helper/constants";
class CartPage {
  elements = {
    // All cart rows
    cartItems: () =>
      cy.get("table.table.table-striped.table-bordered tbody tr"),

    itemRowByName: (name: string) => {
      return cy.get("table.table.table-striped.table-bordered tbody tr").then(($rows) => {
        if ($rows.length === 0) {
          throw new Error("Cart is empty – no rows found.");
        }

        const matched = $rows.filter((_, el) => {
          const productName = Cypress.$(el).find("td").eq(1).find("a").text().trim();
          return productName === name;
        });

        if (matched.length === 0) {
          throw new Error(`Product '${name}' not found in cart.`);
        }

        return cy.wrap(matched);
      });
    },


    // Quantity input inside 5th td (index 4)
    quantityInput: (name: string) =>
      this.elements
        .itemRowByName(name)
        .find("td")
        .eq(4)
        .find('input[type="text"][name^="quantity"]'),

    // Unit price in 4th td (index 3)
    unitPrice: (name: string) =>
      this.elements.itemRowByName(name).find("td").eq(3),

    // Total price in 6th td (index 5)
    totalPrice: (name: string) =>
      this.elements.itemRowByName(name).find("td").eq(5),

    // Remove button link in 7th td (index 6)
    removeButton: (name: string) =>
      this.elements
        .itemRowByName(name)
        .find("td")
        .eq(6)
        .find("a.btn.btn-sm.btn-default"),

    // Coupon input and apply coupon button (adjust text to actual button label)
    couponInput: () => cy.get("#coupon_coupon"),
    applyCouponBtn: () => cy.contains("button", "Apply Coupon"),

    // Shipping estimate elements
    countryDropdown: () => cy.get("#estimate_country"),
    stateDropdown: () => cy.get("#estimate_country_zones"),
    zipInput: () => cy.get("#estimate_postcode"),
    estimateBtn: () => cy.contains("button", "Estimate"),
    shipmentDropdown: () => cy.get("#shippings"),

    // Totals selectors (assumes label in a td, value in next td)
    subTotal: () => cy.contains("td", "Sub-Total:").next(),
    flatShippingRate: () => cy.contains("td", "Flat Shipping Rate:").next(),
    totalAmount: () => cy.contains("td", "Total:").next(),

    // Buttons
    updateBtn: () => cy.contains("button", "Update"),
    checkoutBtn: () => cy.contains("button", "Checkout"),
    continueShoppingBtn: () => cy.contains("button", "CContinue Shopping"),
  };


  verifyProductTotalPrice(productName: string, expectedPrice: string) {
    this.elements.totalPrice(productName).should("contain", expectedPrice);
  }

  verifyTotalAmount(expectedAmount: string) {
    this.elements.totalAmount().should("contain", expectedAmount);
  }
}

export default CartPage;
