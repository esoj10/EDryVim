import { URL_AP } from "@/support/const";
import HomePage from "@pageobjects/Home.page";
import { Page } from "@pageobjects/page";

class LoginPage extends Page {
    get UserNameInput() {
        return "#username";
    }
    get URL() {
        return URL_AP.trim();
    }
    get PasswordInput() {
        return "#password";
    }

    get LoginButton() {
        return "#login";
    }

    public Login(username: string, password: string) {
        cy.visit(this.URL);
        cy.get(this.UserNameInput, { timeout: 10000 }).should('be.visible');
        cy.get(this.UserNameInput).type(username);
        cy.get(this.PasswordInput).type(password);
        cy.get(this.LoginButton).click();
        cy.get(HomePage.fistElement, { timeout: 50000 }).should('be.visible');
    }
}

export default new LoginPage();