import LoginPage from "@pageobjects/login.page"
import { credentials } from "@fixtures/users.json"
import HomePage from "@pageobjects/Home.page";
import HeadersPage from "@pageobjects/Header.page";
import ReportsPage from "@pageobjects/Reports.page";
import DDPage from "../../pages/reports/DD.page";

describe("for the Current Form Status report page", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        LoginPage.Login(credentials.stg.id, credentials.stg.pass);
        HomePage.getAffinitiv();
        HeadersPage.navReports();
    });
    it("visit the page", () => {
        cy.get(ReportsPage.linkDriverDetails, { timeout: 5000 }).
            should("be.visible");
        cy.get(ReportsPage.linkDriverDetails).click();
    });

    it("apply some filters", () => {
        ReportsPage.getCFSR();
        cy.get(DDPage.dropdownProductName).click();
        cy.get(DDPage.checkboxCMP).click();
        cy.get(DDPage.btnApply).click();
        cy.contains('PRODUCT NAME: CPM');
    });

    afterEach("log out", () => {
        HeadersPage.LogOut();
    });

})