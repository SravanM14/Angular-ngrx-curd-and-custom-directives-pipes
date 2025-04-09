describe('Angular E2E test cases', ()=>{

it('should load the app',()=>{
  cy.visit('http://localhost:4200/host');
  cy.contains('host');
})

it('should load the add product',()=>{
    cy.visit('http://localhost:4200/list');
    cy.get('button').contains('Add Product').click();
    cy.url().should('include','/add');
})

it('should add product', ()=>{
    cy.visit('http://localhost:4200/add');
    cy.get('input[formControlName="product"]').type('product45');
    cy.get('input[formControlName="price"]').type('500');
    cy.get('button').contains('Add')
})



})
