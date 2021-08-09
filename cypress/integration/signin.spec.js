/// <reference types="cypress" />

describe('', () => {
    before('', () => {
            cy.visit('http://localhost:1667/#/');
        });
        it('', () => {
            cy.get(':nth-child(2) > .nav-link').click();
            cy.get(':nth-child(1) > .form-control').type('dolorem@mail.com');
            cy.get(':nth-child(2) > .form-control').type('Dolorem123!@#');
            cy.get('.btn').click();
            cy.get(':nth-child(4) > .nav-link').contains('Dolorem').should('exist');
        });
    });