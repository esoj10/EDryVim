import GooglePage from "@pageobjects/Google.page"

describe("in google", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    })
    it("try to search some", () => {
        cy.visit(GooglePage.URL);
        cy.get(GooglePage.inputSearch).type("pokemon");
        cy.get(GooglePage.btnSearch).click();
        cy.get('#search a').invoke('attr', 'href').then((href) => console.log(href));
        cy.contains('pokemon')
    })
})