import { addProductByName } from '../../support/productHelpers';

describe('Add products to the cart, update total items, green box and basket icon', () => {
  it('should add SKINSHEEN BRONZER STICK and BENEFIT BELLA BAMBA', () => {
    const baseUrl = 'https://automationteststore.com/';
    const productsToAdd: RegExp[] = [
      /Skinsheen Bronzer Stick/i,
      /Benefit Bella Bamba/i
    ];

    let previousCount = 0;

    cy.visit(baseUrl);
    cy.get('.fixed_wrapper').should('be.visible');

    function addNext(index: number) {
      if (index >= productsToAdd.length) {
        return;
      }

      const productName = productsToAdd[index];

      addProductByName(productName, previousCount).then(() => {
        cy.get('header .block_7 span.label.label-orange.font14')
          .invoke('text')
          .then(text => {
            previousCount = parseInt(text.replace(/\D/g, '')) || 0;
            addNext(index + 1);
          });
      });
    }

    addNext(0);
  });
});
