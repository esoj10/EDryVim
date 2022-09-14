import { Page } from "@pageobjects/page";

class ReportsPage extends Page {
    get linkMileageHistory() {
        return '[name="mileageHistory"]';
    }
    get linkTripDetails() {
        return '[name="tripDetails"]';
    }
    get linkReimbursementHistory() {
        return '[name="reimbursementHistory"]';
    }
    get linkReimbursement() {
        return '[name="review"]';
    }
    get linkTaxReport() {
        return '[name="taxReport"]';
    }
    get linkDriverDetails() {
        return '[name="driverDetails"]';
    }
    get linkComplianceStatus() {
        return '[name="complianceStatus"]';
    }
    get linkMvrReport() {
        return '[name="mvrReport"]';
    }
    get linkDriverSafetyReport() {
        return '[name="driverSafetyReport"]';
    }

    public getMHR() {
        cy.get(this.linkMileageHistory, { timeout: 5000 }).should("be.visible");
        cy.get(this.linkMileageHistory).click();
    }

    public getTDR() {
        cy.get(this.linkTripDetails, { timeout: 5000 }).should("be.visible");
        cy.get(this.linkTripDetails).click();
    }

    public getRHR() {
        cy.get(this.linkReimbursementHistory, { timeout: 5000 }).should("be.visible");
        cy.get(this.linkReimbursementHistory).click();
    }

    public getRR() {
        cy.get(this.linkReimbursement, { timeout: 5000 }).should("be.visible");
        cy.get(this.linkReimbursement).click();
    }
    public getMVTR() {
        cy.get(this.linkTaxReport, { timeout: 5000 }).should("be.visible");
        cy.get(this.linkTaxReport).click();
    }
    public getDDR() {
        cy.get(this.linkDriverDetails, { timeout: 5000 }).should("be.visible");
        cy.get(this.linkDriverDetails).click();
    }
    public getCFSR() {
        cy.get(this.linkComplianceStatus, { timeout: 5000 }).should("be.visible");
        cy.get(this.linkComplianceStatus).click();
    }
    public getMVRR() {
        cy.get(this.linkMvrReport, { timeout: 5000 }).should("be.visible");
        cy.get(this.linkMvrReport).click();
    }

    public getDSR() {
        cy.get(this.linkDriverSafetyReport, { timeout: 5000 }).should("be.visible");
        cy.get(this.linkDriverSafetyReport).click();
    }
}

export default new ReportsPage();