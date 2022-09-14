import LoginPage from "@pageobjects/login.page"
import { credentials } from "@fixtures/users.json"
import HomePage from "@pageobjects/Home.page";
import HeadersPage from "@pageobjects/Header.page";
import ReportsPage from "@pageobjects/Reports.page";
import CFSPage from "../../pages/reports/CFS.page";

require('cypress-xpath');

describe("for the Current Form Status report page", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        LoginPage.Login(credentials.stg.id, credentials.stg.pass);
        HomePage.getAffinitiv();
        HeadersPage.navReports();
    });
    it("visit the page", () => {
        cy.get(ReportsPage.linkComplianceStatus, { timeout: 5000 }).
            should("be.visible");
        cy.get(ReportsPage.linkComplianceStatus).click();
    });

    it("apply some filters", () => {
        ReportsPage.getCFSR();
        cy.get(CFSPage.dropdownProductName).click();
        cy.get(CFSPage.checkboxCMP).click();
        cy.get(CFSPage.btnApply).click();
        cy.contains('PRODUCT NAME: CPM');
    });

    it.only("delete the applied filter", () => {
        ReportsPage.getCFSR();
        cy.get(CFSPage.dropdownProductName).click();
        cy.get(CFSPage.checkboxCMP).click();
        cy.get(CFSPage.btnApply).click();
        cy.get(CFSPage.btnNotCPM).click();
        cy.get(CFSPage.btnApply).click();
        cy.contains('PRODUCT NAME: CPM');
    });

    afterEach("log out", () => {
        HeadersPage.LogOut();
    });

})