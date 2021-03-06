import LoginPage from "@pageobjects/login.page"
import { credentials } from "@fixtures/users.json"
import HomePage from "@pageobjects/Home.page";
import HeadersPage from "@pageobjects/Header.page";


describe("for a Client's Main dashboards  page", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        LoginPage.Login(credentials.stg.id, credentials.stg.pass);
        HomePage.getAffinitiv();
    });
    it("return to Home page", () => {
        cy.get(HeadersPage.tabHome, { timeout: 50000 }).should('be.visible');
        cy.get(HeadersPage.tabHome).click();
        cy.contains("Affinitiv");
    });
    it("check the Customer page", () => {
        cy.get(HeadersPage.tabCustomer, { timeout: 50000 }).should('be.visible');
        cy.get(HeadersPage.tabCustomer).click();
        cy.contains("Affinitiv");
    });
    it("check the Reports page", () => {
        cy.get(HeadersPage.tabReports, { timeout: 50000 }).should('be.visible');
        cy.get(HeadersPage.tabReports).click();
        cy.contains("Affinitiv");
    });

    afterEach("log out", () => {
        HeadersPage.LogOut();
    });

})