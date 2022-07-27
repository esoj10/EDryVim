import LoginPage from "@pageobjects/login.page"
import { credentials } from "@fixtures/users.json"
import HomePage from "@pageobjects/Home.page";
import HeadersPage from "@pageobjects/Header.page";

describe("for the Home page", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        LoginPage.Login(credentials.stg.id, credentials.stg.pass);
    });
    it("click on affinitiv", () => {
        cy.get(HomePage.fistElement, { timeout: 50000 }).should('be.visible');
        cy.get(HomePage.inputSearch).type('affinitiv');
        cy.get(HomePage.fistElement).click();
        cy.contains("Affinitiv");
    });
    it("check the products filters", () => {
        cy.get(HomePage.fistElement, { timeout: 50000 }).should('be.visible');
        cy.get(HomePage.dropDownProduct).click();
        cy.get(HomePage.checkboxProdCPM).click();
        cy.get(HomePage.checkboxProdFAVR).click();
        cy.get(HomePage.checkboxProdTECH).click();
        cy.contains("Affinitiv");
    });

    afterEach("log out", () => {
        HeadersPage.LogOut();
    });
})