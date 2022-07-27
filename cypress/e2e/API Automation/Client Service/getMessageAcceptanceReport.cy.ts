import { getMessageAcceptanceReport as data } from
    "@fixtures/APIValues/clientService.json";
describe("in client service, get message acceptance report", function () {
    beforeEach(function () {
        cy.authorizationAPApi();
    });

    it("simple report", function () {

        cy.clientRequestAPI(data.simple);
    });
    it("olny first 20", function () {
        cy.clientRequestAPI(data.pagination);
    });
    it("order by fisrt name", function () {
        cy.clientRequestAPI(data.pagination);
    });
});
