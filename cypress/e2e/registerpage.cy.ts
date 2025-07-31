import HomePage from "cypress/support/pages/home_page";

describe('Register Page TestSuite',()=>{
    it('registers new user',()=>{
         const home_page: HomePage = new HomePage();
         const  register_page = home_page.goToLoginPage();
         cy.get('button').contains('Continue').should('be.visible').and('not.be.disabled').click();

    })
})