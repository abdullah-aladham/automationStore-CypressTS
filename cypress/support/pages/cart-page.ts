import { BASE_URL } from "../helper/constants";
import HomePage from "./home_page";

class CartPage{

    elements =
    {
        cartList: ()=> cy.get(".product-list"),
        couponField: () => cy.get("#coupon_coupon"),
        applyCouponBtn: ()=> cy.get("#apply_coupon_btn"),
        messageAlert: ()=> cy.get(".alert"),
        priceTable: ()=> cy.get("#totals_table td"),
        totalPrice: ()=> cy.get(".bold.totalamout").contains("$"),
        discountValue: ()=> cy.contains("span.bold","-$"),
    }

    checkSingleProductAddedToCart(productName) {
       this.elements.cartList().should("contain",productName)  //product should be added to the cart
    }

    checkMultipleProductAddedToCart(products) {
    products.forEach(product => {
        this.elements.cartList().should("contain",product)  //products should be added to the cart
    });
    }

    getTotalPrice(){
        return this.elements.totalPrice().invoke("text").then((price)=>{
            price=price.replace("$","");
            let priceNum=parseFloat(price);
            return priceNum;
        })
    }

    applyCoupon(coupon){
        this.elements.couponField().type(coupon);
        this.elements.applyCouponBtn().click();
    }

    checkAlertSuccessMessage(){
        this.elements.messageAlert().should("be.visible").and("contain","Success: Your coupon discount has been applied!");
    }

    checkDiscountValueIsVisible(){
        this.elements.priceTable().should("contain","-$");
    }

    getDiscountValue(){
        return this.elements.discountValue().invoke("text").then((discount)=>{
            discount=discount.replace("-$","");
            let discountNum=parseFloat(discount);
            return discountNum;
        })
    }

}
export default CartPage;