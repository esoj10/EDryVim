import { getMvrReport as data } from
    "@fixtures/APIValues/clientService.json";
describe("in MVR service, get message acceptance report", function () {
    beforeEach(function () {
        cy.authorizationAPApi();
    });

    it("simple report", function () {
        cy.MVRRequestAPI(data.simple).then((response) => {
            expect(JSON.stringify(response.body)).include(
                'Alert: No driver date of birth returned by state'
            );
        });
    });
});
