import { BASE_URL } from "../helper/constants";
import HomePage from "./home_page";

class CartPage{

    elements =
    {
        
    }

    checkSingleProductAddedToCart() {
       cy.get(".product-list").should("contain","Skinsheen Bronzer Stick")  //product should be added to the cart
    }

}
export default CartPage;