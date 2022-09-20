import { Page } from "@pageobjects/page";

class HeadersPage extends Page {
    get tabHome() {
        return '.header__nav > :nth-child(1) > .clearfix > :nth-child(1) > a';
    }
    get tabCustomer() {
        return '.header__nav > :nth-child(1) > .clearfix > :nth-child(2) > a';
    }
    get tabReports() {
        return '.header__nav > :nth-child(1) > .clearfix > :nth-child(3) > a';
    }
    get tabHelpCenter() {
        return '.header__nav > :nth-child(1) > .clearfix > :nth-child(4) > a';
    }
    get imgUser() {
        return '.user_img > img';
    }
    get dropdownLogOut() {
        return '.user_section.drop-down-menu > nav > ul > li:nth-child(3)';
    }


    public LogOut() {
        cy.wait(5000);
        cy.get(this.imgUser, { timeout: 50000 }).should('be.visible');
        cy.get(this.dropdownLogOut).invoke('show');
        cy.get(this.dropdownLogOut).click({ force: true });
    }

    public navReports() {
        cy.get(this.tabReports, { timeout: 50000 }).should('be.visible');
        cy.get(this.tabReports).click();
        //cy.contains("Affinitiv");
    }
}

export default new HeadersPage();