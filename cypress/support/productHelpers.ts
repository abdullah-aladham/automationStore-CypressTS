export function addProductByName(productName: RegExp, previousCount: number) {
  return cy.get('a.prdocutname')
    .contains(productName)
    .closest('div.col-md-3')
    .as('productContainer')
    .then(() => {
      cy.get('@productContainer')
        .find('a.productcart')
        .click();

      cy.get('header .block_7 span.label.label-orange.font14')
        .should(($span) => {
          const newCount = parseInt($span.text().replace(/\D/g, '')) || 0;
          expect(newCount).to.be.at.least(previousCount + 1);
        });

      cy.get('@productContainer')
        .find('.pricetag')
        .should('have.class', 'added_to_cart');

      cy.get('@productContainer')
        .find('.quick_basket')
        .should('be.visible');
    });
}
