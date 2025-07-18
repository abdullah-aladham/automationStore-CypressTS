import { BASE_URL } from "../helper/constants";
import HomePage from "./home_page";

class CartPage{

    elements =
    {
        cartList: ()=> cy.get(".product-list"),
    }

    checkSingleProductAddedToCart(productName) {
       this.elements.cartList().should("contain",productName)  //product should be added to the cart
    }

}
export default CartPage;