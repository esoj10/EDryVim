import FacePage from "@pages/Face.page"

describe("in facebook", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(FacePage.URL);
        FacePage.login()
    })
    it("try to scroll down", () => {
        cy.scrollTo(0, 500);
        cy.scrollTo(0, 500);
    })
    it("try to search people", () => {
        cy.get(FacePage.inputFirstSearch).type('zhou zheng');
        cy.get(FacePage.inputSearch).clear();
        cy.get(FacePage.inputSearch).type('david vargas');
        cy.get(FacePage.inputSearch).clear();
        cy.get(FacePage.inputSearch).type('jose barrantes araya');
    })
})

