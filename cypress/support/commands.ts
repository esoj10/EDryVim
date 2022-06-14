declare namespace Cypress {
    interface Chainable<Subject> {
        dataCy: any
    }
}

Cypress.Commands.add('dataCy', (data: string) => {
    return cy.get('[data-cy=' + data + ']')
})