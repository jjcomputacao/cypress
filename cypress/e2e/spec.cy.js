describe('Desafio Web', () => {
  it('Test', () => {
    cy.visit('https://advantageonlineshopping.com/#/')
    cy.viewport(window.screen.width, window.screen.height);
    cy.get('#search').click();
    cy.get('#autoComplete').type('HP H2310 IN-EAR HEADSET');
    cy.xpath('//p[contains(.,"HP H2310 IN-EAR HEADSET")]').should('be.visible').click();
    cy.get('#Description > .roboto-regular').contains('HP H2310 IN-EAR HEADSET');
    cy.get('#productProperties > div.fixedBtn > button').click();
    cy.scrollTo(0, 500);
    cy.xpath('//button[contains(.,"ADD TO CART")]').should('be.visible').click();
    cy.get('#search').click();
    cy.get('#autoComplete').type('HP USB 3 BUTTON OPTICAL MOUSE');
    cy.xpath('//p[contains(.,"HP USB 3 BUTTON OPTICAL MOUSE")]').should('be.visible').click();
    cy.get('#Description > .roboto-regular').contains('HP USB 3 BUTTON OPTICAL MOUSE');
    cy.get('#productProperties > div.fixedBtn > button').click();
    cy.xpath('//button[contains(.,"ADD TO CART")]').should('be.visible').click();
    cy.get('#checkOutPopUp').click();
    cy.get('#checkOutPopUp', {timeout:10000}).should('not.be.visible');
    cy.xpath('(//h3[contains(.,"HP H2310 IN-EAR HEADSET")])[2]').should('be.visible');
    cy.xpath('(//h3[contains(.,"HP USB 3 BUTTON OPTICAL MOUSE")])[2]').should('be.visible');
  })
})
