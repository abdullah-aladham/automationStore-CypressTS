import CartPage from "cypress/support/pages/cart-page";
import HomePage from "cypress/support/pages/home_page";
const home_page = new HomePage();

describe('Apply Coupon for the cart', () => {
    before(()=>{
        //Given the Cart has items
        cy.request("/index.php?rt=r/product/product/addToCart&product_id=52");
        cy.request("/index.php?rt=r/product/product/addToCart&product_id=50");
    })
    it('Apply Coupon when the coupon is valid', () => {
        let priceBeforeDiscount, discountValue;
        const cart_page = home_page.goToCartPage(); //Given the user is on the Cart page

        //Get price before discount
        cart_page.getTotalPrice().then((price)=>{
            priceBeforeDiscount= price;    
        });

        cart_page.applyCoupon("FREESHIP"); //Apply copoun
        cart_page.checkAlertSuccessMessage(); //Chack success message
        cart_page.checkDiscountValueIsVisible(); //chack discount is applied

        //Get discount value
        cart_page.getDiscountValue().then((discount)=>{
            discountValue=discount;
        });

        //Check discount value is subtracted rom the total value
        cart_page.getTotalPrice().then((priceAfter)=>{
            expect(priceAfter).to.eq(priceBeforeDiscount-discountValue);
        });
    });
    
});