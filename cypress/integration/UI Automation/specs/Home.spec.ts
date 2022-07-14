import LoginPage from "@pageobjects/login.page"
import { credentials } from "@fixtures/users.json"
import HomePage from "../pages/Home.page";

describe("for Home page", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        LoginPage.Login(credentials.stg.id, credentials.stg.pass);
    });
    it("click on affinitiv", () => {
        cy.visit(LoginPage.URL);
        cy.get(HomePage.fistElement, { timeout: 50000 }).should('be.visible');
        cy.get(HomePage.inputSearch).type('affinitiv');
        cy.get(HomePage.fistElement).click();
        cy.contains("Affinitiv");
    });
    it("check the products filters", () => {
        cy.visit(LoginPage.URL);
        cy.get(HomePage.fistElement, { timeout: 50000 }).should('be.visible');
        cy.get(HomePage.inputSearch).type('affinitiv');
        cy.get(HomePage.fistElement).click();
        cy.contains("Affinitiv");
    });
})