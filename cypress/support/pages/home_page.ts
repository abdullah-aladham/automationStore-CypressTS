import { BASE_URL } from "../helper/constants";
import LoginPage from "./login_page";
import CartPage from "./cart-page";


class HomePage {

    elements =
        {

            loginPageBtn: () => cy.contains('a', 'Login or register'),
            addToCartBtn: (productName) => cy.contains(".container-fluid",productName).children().contains("div",productName).parent().parent().find(".productcart"),
            productCard: (productName) => cy.contains(".fixed_wrapper .prdocutname",productName),
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

    addSingleProductToCart(productName) {
        cy.visit(BASE_URL);   //user is on the home page
        this.elements.productCard(productName).should("be.visible"); //products card is visible on the home page
        this.elements.addToCartBtn(productName).should("be.visible").click()  //add to cart button is visible
        //this.elements.addToCartBtn().click() // user clicks on add to cart button
        this.elements.addedToCart().should("be.visible") //a cart icon should be visible at the left of the price under the product
        cy.get("div.added_to_cart").should("have.css","border-color","rgb(55, 137, 27)") //he box below the product in the homepage should turn green
        cy.get(".topcart .label-orange").should("not.contain","0") //Cart icon on the top of homepage should update with item count

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