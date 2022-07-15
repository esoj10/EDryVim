import LoginPage from "@pageobjects/login.page"
import { credentials } from "@fixtures/users.json"
import HomePage from "../pages/Home.page";

describe("for login page", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    })
    it("try to login", () => {
        cy.visit(LoginPage.URL);
        cy.get(LoginPage.UserNameInput).type(credentials.stg.id);
        cy.get(LoginPage.PasswordInput).type(credentials.stg.pass);
        cy.get(LoginPage.LoginButton).click(); cy
        cy.get(HomePage.fistElement, { timeout: 50000 }).should('be.visible');
        cy.url().should('include', LoginPage.URL);
    })
})