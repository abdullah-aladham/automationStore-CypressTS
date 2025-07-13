import { BASE_URL } from "../helper/constants";
import LoginPage from "./login_page";
import CartPage from "./cart-page";


class HomePage {

    elements =
        {

            loginPageBtn: () => cy.contains('a', 'Login or register'),
            addToCartBtn: () => cy.get(".productcart").first(),
            productCard: () => cy.contains(".fixed_wrapper .prdocutname","Skinsheen Bronzer Stick"),
            cartBtn: () => cy.contains('option',"Cart"),
            addedToCart: () => cy.get("a[title='Added to cart']"),
        }

    goToLoginPage(): LoginPage {
        cy.visit(BASE_URL);
        this.elements.loginPageBtn().click();

        cy.get('h1.heading1 .maintext')
            .should('be.visible')
            .and('contain.text', 'Account Login');
        return new LoginPage();
    }

    addSingleProductToCart() {
        cy.visit(BASE_URL);
        this.elements.productCard().should("be.visible");
        this.elements.addToCartBtn().should("be.visible")
        this.elements.addToCartBtn().click()
        this.elements.addedToCart().should("be.visible")
        cy.get("div.added_to_cart").should("have.css","border-color","rgb(55, 137, 27)")
        cy.get(".topcart .label-orange").should("contain","1")

    }

    goToCartPage(): CartPage {
        cy.visit(BASE_URL);
        cy.get(".form-control").first().select("Cart")
        cy.get('h1.heading1 .maintext')
            .should('be.visible')
            .and('contain.text', 'Shopping Cart');
        return new CartPage();
    }

}

export default HomePage;