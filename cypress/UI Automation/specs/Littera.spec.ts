import litteraPage from "@/cypress/UI Automation/integration/pages/littera.page";
import LitteraPage from "@/cypress/UI Automation/integration/pages/littera.page"

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