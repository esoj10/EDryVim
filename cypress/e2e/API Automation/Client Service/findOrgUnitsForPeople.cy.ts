import { findOrgUnitsForPeople as data } from "@fixtures/APIValues/clientService.json";
describe("in client service, find org units for people", function () {
    beforeEach(function () {
        cy.authorizationAPApi();
    });

    it("simple report", function () {
        cy.clientRequestAPI(data.simple);
    });
});
