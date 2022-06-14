import litteraPage from "@pages/littera.page";
import LitteraPage from "@pages/littera.page"

describe("in littera", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(litteraPage.devURL);
        LitteraPage.LoginOrgAdmin()
    })
    it("try to login", () => {
        cy.contains("programs");
    })
})