import CartPage from "./cart_page";

class VerifyCartAfterRefresh {
  private cartPage = new CartPage();

  verify(items: { productName: string; expectedQuantity: number }[]) {
    // Step 1: Assert all item rows and values BEFORE refresh
    items.forEach(({ productName, expectedQuantity }) => {
      this.assertProductRow(productName, expectedQuantity);
    });

    // Step 2: Refresh the page
    cy.reload();

    // Step 3: Assert again AFTER refresh
    items.forEach(({ productName, expectedQuantity }) => {
      this.assertProductRow(productName, expectedQuantity);
    });

    // Step 4: Check static cart elements after refresh
    this.assertCartElementsVisible();
  }

  private assertProductRow(productName: string, expectedQuantity: number) {
    this.cartPage.elements.itemRowByName(productName).then(($row) => {
      const row = cy.wrap($row);
      row.find("td").eq(1).find("a").should("contain", productName); // product name
      row.find("td").eq(3).should("not.be.empty"); // unit price
      row.find("td").eq(4).find('input').should("have.value", expectedQuantity.toString()); // quantity
      row.find("td").eq(5).should("not.be.empty"); // total price
      row.find("td").eq(6).find("a.btn").should("exist"); // remove button
    });
  }

  private assertCartElementsVisible() {
    // Totals
    this.cartPage.elements.subTotal().should("exist");
    this.cartPage.elements.flatShippingRate().should("exist");
    this.cartPage.elements.totalAmount().should("exist");

    // Buttons
    this.cartPage.elements.updateBtn().should("exist");
    this.cartPage.elements.checkoutBtn().should("exist");
    this.cartPage.elements.continueShoppingBtn().should("exist");

    // Coupon
    this.cartPage.elements.couponInput().should("exist");
    this.cartPage.elements.applyCouponBtn().should("exist");

    // Shipping estimator
    this.cartPage.elements.countryDropdown().should("exist");
    this.cartPage.elements.stateDropdown().should("exist");
    this.cartPage.elements.zipInput().should("exist");
    this.cartPage.elements.estimateBtn().should("exist");
    this.cartPage.elements.shipmentDropdown().should("exist");
  }
}

export default VerifyCartAfterRefresh;
