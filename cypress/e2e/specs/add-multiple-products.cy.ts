describe('Add products to the cart - step by step with reload and verify count', () => {
  it('should add all products to the cart one by one and verify count', () => {
    const baseUrl = 'https://automationteststore.com/';
    let previousCount = 0;

    function addProductAtIndex(index, total) {
      if (index >= total) {
        return; 
      }//نمشي على كل المنتجات   
      //بعيد تحميل الصفحة كل مرة لانه مرات بس اضيف المنتج بضل بالهوم ومرات بنتقل على الكارت

      cy.visit(baseUrl);
      cy.get('.fixed_wrapper').should('be.visible');
      cy.get('a.productcart').should('be.visible');

      // اقرأ العداد الحالي للمنتجات في العربة
      cy.get('header .block_7 span.label.label-orange.font14')
        .invoke('text')
        .then((text) => {
          const currentCount = parseInt(text.replace(/\D/g, '')) || 0;

          // اضغط على زر إضافة المنتج رقم index
          cy.get('a.productcart').eq(index).click();

          //  يوجد منتجات اقل كمية ممكن اضيفها 2 ومنهم 1
          // تحقق أن العداد زاد أو على الأقل بقي كما هو (حسب الكمية)
          cy.get('header .block_7 span.label.label-orange.font14')
            .should(($span) => {
              const newCount = parseInt($span.text().replace(/\D/g, '')) || 0;
              expect(newCount).to.be.at.least(currentCount);
              previousCount = newCount;
            });

          //    إضافة المنتج التالي بعد إعادة تحميل الصفحة
          addProductAtIndex(index + 1, total);
        });
    }

    cy.visit(baseUrl);
    cy.get('.fixed_wrapper').should('be.visible');
    cy.get('a.productcart').should('be.visible').then(($buttons) => {
      const productCount = $buttons.length;
      addProductAtIndex(0, productCount);
    });
  });
});
