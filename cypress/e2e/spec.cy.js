/// <reference types="cypress" />
describe('Assignment', () => 
{
    it('Text Box', () =>
     {
      cy.visit('https://demoqa.com/elements');
      cy.get('#item-0').click();
      cy.get('#userName').type('Sathya');
      cy.get('#userEmail').type('test@gmail.com');
      cy.get('#currentAddress').type('Kurunegala');
      cy.get('#permanentAddress').type('Kurunegala');
      cy.get('#submit').click();
      
    })

    it('Check Box', () =>
     {
      cy.visit('https://demoqa.com/elements');
      cy.get('#item-1').click();
      cy.get('.rct-checkbox').click();
      
    })

    it('Radio Button', () =>
     {
      cy.visit('https://demoqa.com/elements');
      cy.get('#item-2').click();
      cy.get('label[for="yesRadio"]').click();
      cy.get('label[for="impressiveRadio"]').click();
      
    })

  })

