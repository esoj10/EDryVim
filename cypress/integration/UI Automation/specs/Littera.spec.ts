import litteraPage from "@/cypress/integration/UI Automation/pages/littera.page";
import LitteraPage from "@/cypress/integration/UI Automation/pages/littera.page"

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