import HomePage from "cypress/support/pages/home_page";

describe('Add Products to Cart test suite', () => {
    
    it('Add single product to the cart', () => {
        const home_page: HomePage = new HomePage();
        home_page.addSingleProductToCart();
        const cart_page = home_page.goToCartPage();
        cart_page.checkSingleProductAddedToCart();
    });
});